const nock = require('nock');

const zapier = require('zapier-platform-core');

const constants = require('../../../config/Constants');

// Use this to make test calls into your app:
const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('Basic Authentication', () => {
    const apiMock = nock(constants.BASE_HOST);
    const authData = {
        username: constants.NLIC_USERNAME,
        password: constants.NLIC_PASSWORD,
    };

    afterEach(() => {
        nock.cleanAll();
    });

    it('Successful Basic Authentication', (done) => {
        const bundle = Object.assign({}, { authData });

        apiMock.get(`${constants.BASE_PATH}/utility/licensingModels`)
            .reply(200);

        appTester(App.authentication.test, bundle)
            .then((response) => {
                response.status.should.eql(200);
                done();
            })
            .catch(done);
    });
});
