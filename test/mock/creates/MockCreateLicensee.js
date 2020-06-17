const zapier = require('zapier-platform-core/index');

const constants = require('../../../config/Constants');

const App = require('../../../index');

const appTester = zapier.createAppTester(App);

/*
describe('Create Licensee', () => {
    it('Parameter productNumber bad value', (done) => {
        const bundle = {
            authData: {
                apiKey: constants.NLIC_APIKEY_TEST,
            },
        };

        appTester(App.creates.create_licensee.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch((error) => {
                error.message.should.containEql('Parameter productNumber has bad value undefined');
                done();
            });
    });

});
*/