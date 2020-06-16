require('should/should');

const zapier = require('zapier-platform-core/index');

const constants = require('../../../config/Constants');

const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('Basic Authentication', () => {
    it('Successful Authentication', (done) => {
        const bundle = {
            authData: {
                apiKey: constants.NLIC_APIKEY_TEST,
            },
        };

        appTester(App.authentication.test, bundle)
            .then((response) => {
                response.status.should.eql(200);
                done();
            })
            .catch(done);
    });

    it('Failed Authentication', (done) => {
        const bundle = {
            authData: {
                apiKey: 'XXX',
            },
        };

        appTester(App.authentication.test, bundle)
            .then(() => {
                done('Should not get here');
            })
            .catch((error) => {
                error.message.should.containEql('Unauthorized');
                done();
            });
    });

});
