const zapier = require('zapier-platform-core/index');

const nock = require('nock');

const constants = require('../../../config/Constants');

const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('New Product', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    const apiMock = nock(constants.BASE_HOST);

    it('Should load empty list of Products', (done) => {
        const bundle = {
            authData: {
                username: constants.NLIC_USERNAME,
                password: constants.NLIC_PASSWORD,
            },
            meta: {
                page: 0,
            },
        };

        apiMock.get(`${constants.BASE_PATH}/product?filter%3Dpage%3D=0`)
            .reply(200,
                '{"signature":null,"infos":{"info":[]},"items":'
                + '{"item":[],"pagenumber":null,"itemsnumber":null,"totalpages":null,"totalitems":null,'
                + '"hasnext":null},"id":null,"ttl":null}');

        appTester(App.triggers.new_product.operation.perform, bundle)
            .then((results) => {
                results.length.should.eql(0);
                done();
            })
            .catch(done);
    });

    it('Should load list of Products', (done) => {
        const bundle = {
            authData: {
                username: constants.NLIC_USERNAME,
                password: constants.NLIC_PASSWORD,
            },
            meta: {
                page: 0,
            },
        };

        apiMock.get(`${constants.BASE_PATH}/product?filter%3Dpage%3D=0`)
            .reply(200,
                '{"signature":null,"infos":{"info":[]},"items":{"item":'
                + '[{"property":[{"value":"PQ6KJUD2M-DEMO","name":"number"},'
                + '{"value":"true","name":"active"},{"value":"TryAndBuy demo product","name":"name"},'
                + '{"value":"1.0","name":"version"},{"value":"true","name":"licenseeAutoCreate"},'
                + '{"value":"<p>The product contains sample data for demonstration '
                + 'of the \'TryAndBuy\' licensing model.</p>","name":"description"},'
                + '{"value":"<p>Here you may put your EULA.</p>","name":"licensingInfo"},'
                + '{"value":"true","name":"inUse"},{"value":"You may add arbitrary properties to your product, e.g.'
                + ' ERP reference.","name":"customProperty"}],"list":[{"property":[{"value":"10.00",'
                + '"name":"totalPrice"},'
                + '{"value":"EUR","name":"currency"},{"value":"9.00","name":"amountFix"}],"list":[],"name":"discount"},'
                + '{"property":[{"value":"100.00","name":"totalPrice"},{"value":"EUR","name":"currency"},{"value":"10",'
                + '"name":"amountPercent"}],"list":[],"name":"discount"}],"type":"Product"}],"pagenumber":"0",'
                + '"itemsnumber":"1","totalpages":"1","totalitems":"1","hasnext":"false"},"id":null,"ttl":null}');

        appTester(App.triggers.new_product.operation.perform, bundle)
            .then((results) => {
                results.length.should.above(0);
                done();
            })
            .catch(done);
    });
});
