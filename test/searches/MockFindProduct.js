const { Product, Context, Constants } = require('netlicensing-client/dist/netlicensing-client.node');

const axios = require('axios');
const AxiosMockAdapter = require('axios-mock-adapter');

const should = require('should/should');

const zapier = require('zapier-platform-core/index');

const nock = require('nock');

const constants = require('../../config/Constants');

const App = require('../../index');

const appTester = zapier.createAppTester(App);

describe('My App', () => {
    it('should load recipes', async (done) => {
        const mock = new AxiosMockAdapter(axios);

        const bundle = {
            authData: {
                username: 'demo',
                password: 'demo',
            },
            inputData: {
                number: 'test',
            },
        };

        const product = new Product();
        product.setNumber('test');
        product.setName('fakeName');

        // configure mock for get request
        mock.onGet(`${constants.BASE_HOST}/${constants.BASE_URL}/product/${bundle.inputData.number}`)
            .reply(200);

        appTester(await App.searches.find_product.operation.perform, bundle)
            .then((result) => {
                console.log(result);
                done();
            })
            .catch(done);
    });
});
