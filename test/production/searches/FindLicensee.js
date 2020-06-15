const zapier = require('zapier-platform-core/index');

const App = require('../../../index');

const constants = require('../../../config/Constants');

const appTester = zapier.createAppTester(App);

describe('Find Licensee', () => {
    it('Parameter number bad value', (done) => {
        const bundle = {
            authData: {
                apiKey: constants.NLIC_APIKEY,
            },
        };

        appTester(App.searches.find_licensee.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch((error) => {
                error.message.should.containEql('Parameter number has bad value undefined');
                done();
            });
    });

});
