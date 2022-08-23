const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('APIKey Authentication (MOCK)', () => {
    let baseUrl;
    let mock;

    before(() => {
        baseUrl = `${constants.BASE_HOST}${constants.BASE_PATH}`;
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(Service.getAxiosInstance());
    });

    it('Successful Authentication', async () => {
        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/utility/licensingModels`)
            .reply(200);

        const results = await appTester(App.authentication.test, bundle);

        results.status.should.eql(200);
    });

});
