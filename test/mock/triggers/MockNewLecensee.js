const zapier = require('zapier-platform-core/index');

const nock = require('nock');

const should = require('should');

const constants = require('../../../config/Constants');

const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('New Licensee', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    const apiMock = nock(constants.BASE_HOST);

    it('Should load empty list of Licensee', (done) => {
        const bundle = {
            authData: {
                username: constants.NLIC_USERNAME,
                password: constants.NLIC_PASSWORD,
            },
            meta: {
                page: 0,
            },
        };

        apiMock.get(`${constants.BASE_PATH}/licensee?filter%3Dpage%3D=0`)
            .reply(200,
                '{"signature":null,"infos":{"info":[]},"items":'
                + '{"item":[],"pagenumber":null,"itemsnumber":null,"totalpages":null,"totalitems":null,'
                + '"hasnext":null},"id":null,"ttl":null}');

        appTester(App.triggers.new_licensee.operation.perform, bundle)
            .then((results) => {
                results.length.should.eql(0);
                done();
            })
            .catch(done);
    });

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

        apiMock.get(`${constants.BASE_PATH}/licensee?filter%3Dpage%3D=0`)
            .reply(200,
                '{"signature":null,"infos":{"info":[]},"items":{"item":[{"property":'
                + '[{"value":"ISSUQXNJ9-DEMO","name":"number"},{"value":"true","name":"active"},'
                + '{"value":"PQ6KJUD2M-DEMO","name":"productNumber"},'
                + '{"value":"Try & Buy licensing model demo customer","name":"name"},'
                + '{"value":"true","name":"inUse"}],"list":[],"type":"Licensee"}],'
                + '"pagenumber":"0","itemsnumber":"1","totalpages":"1","totalitems":"1",'
                + '"hasnext":"false"},"id":null,"ttl":null}');

        appTester(App.triggers.new_licensee.operation.perform, bundle)
            .then((results) => {
                results.length.should.above(0);
                done();
            })
            .catch(done);
    });
});
