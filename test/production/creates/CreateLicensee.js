const zapier = require('zapier-platform-core/index');

const constants = require('../../../config/Constants');

const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('Create Licensee', () => {
    it('Parameter productNumber has bad value', (done) => {
        const bundle = {
            authData: {
                username: constants.NLIC_USERNAME,
                password: constants.NLIC_PASSWORD,
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

    it('Should`t create licensee', (done) => {
        const bundle = {
            authData: {
                username: 'wrong_user_name',
                password: constants.NLIC_PASSWORD,
            },
            inputData: {
                productNumber: 'number',
            },
        };

        appTester(App.creates.create_licensee.operation.perform, bundle)
            .then(() => {
                done();
            })
            .catch((error) => {
                error.message.length.should.above(0);
                done();
            });
    });
});
