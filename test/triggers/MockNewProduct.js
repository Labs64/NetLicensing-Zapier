const should = require('should/should');

const zapier = require('zapier-platform-core/index');

const nock = require('nock');

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

        // mocks the next request that matches this url and querystring
        nock('https://go.netlicensing.io/core/v2/rest/product', {
            reqheaders: {
                accept: 'application/json',
            },
        }).get('/')
            .query({ filter: 'page=0' })
            .reply(200, [
                { name: 'name 1', directions: 'directions 1', id: 1 },
                { name: 'name 2', directions: 'directions 2', id: 2 },
            ]);

        appTester(App.triggers.newProduct.operation.perform, bundle)
            .then((result) => {
                console.log(result);
                done();
            })
            .catch(done);
    });
});
