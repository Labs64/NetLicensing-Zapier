const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');
const response = require('../response');
const error = require('../error');

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
            .reply(200, response(licensee));

        const results = await appTester(App.searches.search_licensee.operation.perform, bundle);

        results.should.eql([licensee]);
    });

    it('Not Existing Licensee', async () => {
        const licensee = { number: 'CUSTOMER01', name: 'Customer One', version: '1.0' };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { number: licensee.number },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/licensee/${licensee.number}`)
            .reply(400, error(['NotFoundException', 'Requested licensee does not exist.']));

        try {
            await appTester(App.searches.search_licensee.operation.perform, bundle);
        } catch (e) {
            e.message.should.containEql('Requested licensee does not exist.');
        }
    });

});
