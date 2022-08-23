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
            .reply(200, new Response(new Item(product, 'Product')));

        const results = await appTester(App.searches.search_product.operation.perform, bundle);

        should(results).eql([product]);
    });

    it('Not Existing Product', async () => {
        const product = { number: 'PNUMBER01', name: 'Product One', version: '1.0' };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { number: product.number },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/product/${product.number}`)
            .reply(400,  new Response(new Info('Requested product does not exist.', 'NotFoundException')));

        try {
            await appTester(App.searches.search_product.operation.perform, bundle);
        } catch (e) {
            should(e.infos[0].value).containEql('Requested product does not exist.');
        }
    });
});
