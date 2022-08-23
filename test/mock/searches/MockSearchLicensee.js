const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');
const Response = require('../response/index');
const Item = require('../response/Item');
const Info = require('../response/Info');
const should = require('should');

const appTester = zapier.createAppTester(App);

describe('Search Licensee', () => {
    let baseUrl;
    let mock;

    before(() => {
        baseUrl = `${constants.BASE_HOST}${constants.BASE_PATH}`;
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(Service.getAxiosInstance());
    });

    it('Existing Licensee', async () => {
        const licensee = { number: 'CUSTOMER01', name: 'Customer One' };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { number: licensee.number },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/licensee/${licensee.number}`)
            .reply(200, new Response(new Item(licensee, 'Licensee')));

        const results = await appTester(App.searches.search_licensee.operation.perform, bundle);

        should(results).eql([licensee]);
    });

    it('Not Existing Licensee', async () => {
        const licensee = { number: 'CUSTOMER01', name: 'Customer One', version: '1.0' };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { number: licensee.number },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/licensee/${licensee.number}`)
            .reply(400, new Response(new Info('Requested licensee does not exist.', 'NotFoundException')));

        try {
            await appTester(App.searches.search_licensee.operation.perform, bundle);
        } catch (e) {
            should(e.infos[0].value).containEql('Requested licensee does not exist.');
        }
    });
});
