const { version: platformVersion } = require('zapier-platform-core');
const { version } = require('./package.json');

// auth (basic)
const authentication = require('./authentication/Authentication');
// triggers
const newProduct = require('./triggers/NewProduct');
const newLicensee = require('./triggers/NewLicensee');
// searches
const findLicensee = require('./searches/FindLicensee');
const findProduct = require('./searches/FindProduct');
// creates
const createProduct = require('./creates/CreateProduct');
const createLicensee = require('./creates/CreateLicensee');

// We can roll up all our behaviors in an App.
const App = {
    // This is just shorthand to reference the installed dependencies you have. Zapier will
    // need to know these before we can upload
    version,

    platformVersion,

    // basic authentication
    authentication,

    // beforeRequest & afterResponse are optional hooks into the provided HTTP client
    beforeRequest: [],

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
        [findProduct.key]: { // the key must match the search
            key: findProduct.key, // same as above
            display: {
                // the label goes up in sidebar
                // see: https://cdn.zapier.com/storage/photos/04f7951bda0c43dc80eb630251724336.png
                label: 'Search Product or Create one',
                description: 'If not exist then create one.',
            },
            search: findProduct.key,
            create: createProduct.key,
        },
        [findLicensee.key]: { // the key must match the search
            key: findLicensee.key, // same as above
            display: {
                // the label goes up in sidebar
                // see: https://cdn.zapier.com/storage/photos/04f7951bda0c43dc80eb630251724336.png
                label: 'Search Licensee or Create one',
                description: 'If not exist then create one.',
            },
            search: findLicensee.key,
            create: createLicensee.key,
        },
    },
};

// Finally, export the app.
module.exports = App;
