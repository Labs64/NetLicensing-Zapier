const zapier = require('zapier-platform-core/index');

const App = require('../../../index');

const constants = require('../../../config/Constants');

const appTester = zapier.createAppTester(App);

describe('New Licensee', () => {
    it('Licensees list', (done) => {
        const bundle = {
            authData: {
                apiKey: constants.NLIC_APIKEY_TEST,
            },
            meta: {
                page: 0,
            },
        };

        appTester(App.triggers.new_licensee.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch(done);
    });

});
