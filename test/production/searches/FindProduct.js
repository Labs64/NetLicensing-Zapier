const zapier = require('zapier-platform-core/index');

const App = require('../../../index');

const constants = require('../../../config/Constants');

const appTester = zapier.createAppTester(App);

describe('Find Product', () => {
    it('Parameter number has bad value', (done) => {
        const bundle = {
            authData: {
                username: constants.NLIC_USERNAME,
                password: constants.NLIC_PASSWORD,
            },
        };

        appTester(App.searches.find_product.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch((error) => {
                error.message.should.containEql('Parameter number has bad value undefined');
                done();
            });
    });
    it('Should`t find product', (done) => {
        const bundle = {
            authData: {
                username: 'wrong_user_name',
                password: constants.NLIC_PASSWORD,
            },
            inputData: {
                number: 'number',
            },
        };

        appTester(App.searches.find_product.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch((error) => {
                error.message.length.should.above(0);
                done();
            });
    });
});
