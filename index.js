const { Token, TokenService, Constants, Context } = require('netlicensing-client/dist/netlicensing-client.node');

const { version: platformVersion } = require('zapier-platform-core');
const { version } = require('./package.json');

// auth
// const authentication = require('./authentication/BasicAuth');
const authentication = require('./authentication/Custom');

// triggers
const newProduct = require('./triggers/NewProduct');
const newLicensee = require('./triggers/NewLicensee');
// searches
const findProduct = require('./searches/FindProduct');
const findLicensee = require('./searches/FindLicensee');
// creates
const createProduct = require('./creates/CreateProduct');
const createLicensee = require('./creates/CreateLicensee');
// search or creates
const searchOrCreateProduct = require('./search_or_creates/SearchOrCreateProduct');
const searchOrCreateLicensee = require('./search_or_creates/SearchOrCreateLicensee');

const addAuthToHeader = (request, z, bundle) => {
    if (bundle.authData.username.trim() && bundle.authData.password.trim()) {
        request.headers.Authorization = `Basic ${Buffer.from(`${bundle.authData.username}:${bundle.authData.password}`)
            .toString('base64')}`;
    } else if (bundle.authData.apiKey.trim()) {
        request.headers.Authorization = `Basic ${Buffer.from(`apiKey:${bundle.authData.apiKey}`)
            .toString('base64')}`;
    }

    return request;
};

// We can roll up all our behaviors in an App.
const App = {
    // This is just shorthand to reference the installed dependencies you have. Zapier will
    // need to know these before we can upload
    version,

    platformVersion,

    // basic authentication
    authentication,

    // beforeRequest & afterResponse are optional hooks into the provided HTTP client
    beforeRequest: [addAuthToHeader],

    afterResponse: [],

    // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
    resources: {},

    // If you want your trigger to show up, you better include it here!
    triggers: {
        [newProduct.key]: newProduct,
        [newLicensee.key]: newLicensee,
    },
    // If you want your searches to show up, you better include it here!
    searches: {
        [findLicensee.key]: findLicensee,
        [findProduct.key]: findProduct,
    },

    // If you want your creates to show up, you better include it here!
    creates: {
        [createProduct.key]: createProduct,
        [createLicensee.key]: createLicensee,
    },

    searchOrCreates: {
        [searchOrCreateProduct.key]: searchOrCreateProduct,
        [searchOrCreateLicensee.key]: searchOrCreateLicensee,
    },
};

// Finally, export the app.
module.exports = App;
