const zapier = require('zapier-platform-core');
const { Service } = require('netlicensing-client/dist/netlicensing-client.node');
const AxiosMockAdapter = require('axios-mock-adapter');
const constants = require('../../../config/Constants');
const App = require('../../../index');

const appTester = zapier.createAppTester(App);

describe('New Licensee', () => {
    let baseUrl;
    let mock;

    before(() => {
        baseUrl = `${constants.BASE_HOST}${constants.BASE_PATH}`;
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(Service.getAxiosInstance());
    });

    it('Licensee List', async () => {
        const bundle = {
            authData: { apiKey: constants.NLIC_APIKEY_TEST },
            meta: {
                page: 0,
            },
        };

        // configure mock for get request
        mock.onGet(`${baseUrl}/licensee`)
            .reply(200,
                '{"signature":null,"infos":{"info":[]},"items":{"item":[{"property":'
                + '[{"value":"ISSUQXNJ9-DEMO","name":"number"},{"value":"true","name":"active"},'
                + '{"value":"PQ6KJUD2M-DEMO","name":"productNumber"},'
                + '{"value":"Try & Buy licensing model demo customer","name":"name"},'
                + '{"value":"true","name":"inUse"}],"list":[],"type":"Licensee"}],'
                + '"pagenumber":"0","itemsnumber":"1","totalpages":"1","totalitems":"1",'
                + '"hasnext":"false"},"id":null,"ttl":null}'
                );

        const results = await appTester(App.triggers.new_licensee.operation.perform, bundle);

        results.length.should.above(0);
    });

});
