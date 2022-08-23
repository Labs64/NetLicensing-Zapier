const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');
const response = require('../response');
const error = require('../error');

const appTester = zapier.createAppTester(App);

describe('Create Licensee', () => {
    let baseUrl;
    let mock;

    before(() => {
        baseUrl = `${constants.BASE_HOST}${constants.BASE_PATH}`;
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(Service.getAxiosInstance());
    });

    it('Create Licensee', async () => {
        const licensee = { name: 'Customer One', productNumber: 'PNUMBER1', active: true };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { name: licensee.name },
            inputData: { productNumber: licensee.productNumber },
            inputData: { active: licensee.active },
        };
/*
        // configure mock for get request
        mock.onPost(`${baseUrl}/licensee`)
            .reply(200, response(licensee));

        const results = await appTester(App.creates.create_licensee.operation.perform, bundle);

        results.should.have.property('name');
*/
    });
});
