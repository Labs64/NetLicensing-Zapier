const should = require('should/should');

const zapier = require('zapier-platform-core/index');

const App = require('../../index');

const appTester = zapier.createAppTester(App);

describe('FindLicensee', () => {
    it('should load recipes', (done) => {
        const bundle = {
            authData: {
                username: 'demo',
                password: 'demo',
            },
        };

        appTester(App.searches.findLicensee.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch(done);
    });
});
