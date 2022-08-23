const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');
const response = require('../response');
const error = require('../error');

const appTester = zapier.createAppTester(App);

describe('Create Product', () => {
    let baseUrl;
    let mock;

    before(() => {
        baseUrl = `${constants.BASE_HOST}${constants.BASE_PATH}`;
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(Service.getAxiosInstance());
    });

    it('Create Product', async () => {
        const product = { name: 'Product One', version: '1.0', active: true };

        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            inputData: { name: product.name },
            inputData: { version: product.version },
            inputData: { active: product.active },
        };

        // configure mock for get request
        mock.onPost(`${baseUrl}/product`)
            .reply(200, response(product));

        const results = await appTester(App.creates.create_product.operation.perform, bundle);

        results.should.have.property('name');
    });
});
