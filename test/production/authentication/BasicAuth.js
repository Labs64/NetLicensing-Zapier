require('should/should');

const zapier = require('zapier-platform-core/index');

const constants = require('../../../config/Constants');

const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('Basic Auth', () => {
    it('Success auth', (done) => {
        // Try changing the values of username or password to see how the test method behaves
        const bundle = {
            authData: {
                username: constants.NLIC_USERNAME,
                password: constants.NLIC_PASSWORD,
            },
        };

        appTester(App.authentication.test, bundle)
            .then((response) => {
                response.status.should.eql(200);
                done();
            })
            .catch(done);
    });

    it('Failed auth', (done) => {
        // Try changing the values of username or password to see how the test method behaves
        const bundle = {
            authData: {
                username: 'user',
                password: 'badpwd',
            },
        };

        appTester(App.authentication.test, bundle)
            .then(() => {
                done('Should not get here');
            })
            .catch((error) => {
                error.message.should.containEql('The username and/or password you supplied is incorrect');
                done();
            });
    });
});