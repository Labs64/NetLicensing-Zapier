const should = require('should/should');

const zapier = require('zapier-platform-core/index');

const App = require('../../../index');

const constants = require('../../../config/Constants');

const appTester = zapier.createAppTester(App);

describe('New Licensee', () => {
    it('Should load list of Licensee', (done) => {
        const bundle = {
            authData: {
                username: constants.NLIC_USERNAME,
                password: constants.NLIC_PASSWORD,
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
    it('Should`t load list of Licensee', (done) => {
        const bundle = {
            authData: {
                username: 'wrong_user_name',
                password: constants.NLIC_PASSWORD,
            },
            meta: {
                page: 0,
            },
        };

        appTester(App.triggers.new_licensee.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch((error) => {
                error.message.length.should.above(0);
                done();
            });
    });
});
