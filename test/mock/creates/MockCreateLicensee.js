const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');
const Response = require('../response/index');
const Item = require('../response/Item');
const should = require('should');

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
            inputData: { name: licensee.name, productNumber: licensee.productNumber, active: licensee.active },
        };

        // configure mock for get request
        mock.onPost(`${baseUrl}/licensee`)
            .reply(200, new Response(new Item(licensee, 'Licensee')));

        const results = await appTester(App.creates.create_licensee.operation.perform, bundle);

        should(results).have.property('name');
    });
});
