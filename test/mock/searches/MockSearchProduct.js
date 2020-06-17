const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');
const response = require('../response');
const error = require('../error');

const appTester = zapier.createAppTester(App);

describe('Search Product', () => {
    let baseUrl;
    let mock;

    before(() => {
        baseUrl = `${constants.BASE_HOST}${constants.BASE_PATH}`;
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(Service.getAxiosInstance());
    });

    it('Existing Product', async () => {
        const product = { number: 'PNUMBER01', name: 'Product One', version: '1.0' };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { number: product.number },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/product/${product.number}`)
            .reply(200, response(product));

        const results = await appTester(App.searches.search_product.operation.perform, bundle);

        results.should.eql([product]);
    });

    it('Not Existing Product', async () => {
        const product = { number: 'PNUMBER01', name: 'Product One', version: '1.0' };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { number: product.number },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/product/${product.number}`)
            .reply(400, error(['NotFoundException', 'Requested product does not exist.']));

        try {
            await appTester(App.searches.search_product.operation.perform, bundle);
        } catch (e) {
            e.message.should.containEql('Requested product does not exist.');
        }
    });

});
