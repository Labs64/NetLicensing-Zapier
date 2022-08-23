const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('New Product', () => {
    let baseUrl;
    let mock;

    before(() => {
        baseUrl = `${constants.BASE_HOST}${constants.BASE_PATH}`;
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(Service.getAxiosInstance());
    });

    it('Products list', async () => {
        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            meta: {
                page: 0,
            },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/product`)
            .reply(200,
                '{"signature":null,"infos":{"info":[]},"items":{"item":'
                + '[{"property":[{"value":"PQ6KJUD2M-DEMO","name":"number"},'
                + '{"value":"true","name":"active"},{"value":"TryAndBuy demo product","name":"name"},'
                + '{"value":"1.0","name":"version"},{"value":"true","name":"licenseeAutoCreate"},'
                + '{"value":"<p>The product contains sample data for demonstration '
                + 'of the \'TryAndBuy\' licensing model.</p>","name":"description"},'
                + '{"value":"<p>Here you may put your EULA.</p>","name":"licensingInfo"},'
                + '{"value":"true","name":"inUse"},{"value":"You may add arbitrary properties to your product, e.g.'
                + ' ERP reference.","name":"customProperty"}],"list":[{"property":[{"value":"10.00",'
                + '"name":"totalPrice"},'
                + '{"value":"EUR","name":"currency"},{"value":"9.00","name":"amountFix"}],"list":[],"name":"discount"},'
                + '{"property":[{"value":"100.00","name":"totalPrice"},{"value":"EUR","name":"currency"},{"value":"10",'
                + '"name":"amountPercent"}],"list":[],"name":"discount"}],"type":"Product"}],"pagenumber":"0",'
                + '"itemsnumber":"1","totalpages":"1","totalitems":"1","hasnext":"false"},"id":null,"ttl":null}'
                );

        const results = await appTester(App.triggers.new_product.operation.perform, bundle);

        results.length.should.above(0);
    });
});
