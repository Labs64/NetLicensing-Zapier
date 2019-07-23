const should = require('should/should');

const zapier = require('zapier-platform-core/index');

const App = require('../../index');

const appTester = zapier.createAppTester(App);

describe('My App', () => {
    it('should load recipes', (done) => {
        const bundle = {
            authData: {
                username: 'demo',
                password: 'demo',
            },
        };

        appTester(App.triggers.newProduct.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch(done);
    });
});
