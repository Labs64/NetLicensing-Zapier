const zapier = require('zapier-platform-core/index');

const App = require('../../../index');

const constants = require('../../../config/Constants');

const appTester = zapier.createAppTester(App);

describe('New Product', () => {
    it('Products list', (done) => {
        const bundle = {
            authData: {
                apiKey: constants.NLIC_APIKEY,
            },
            meta: {
                page: 0,
            },
        };

        appTester(App.triggers.new_product.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch(done);
    });

});
