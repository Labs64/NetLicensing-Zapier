const { version: platformVersion } = require('zapier-platform-core');
const { version } = require('./package.json');

// auth (basic)
const authentication = require('./authentication/authentication');
// triggers
const new_product = require('./triggers/new_product');// TODO: camel case
const new_licensee = require('./triggers/new_licensee');// TODO: camel case
// searches
const find_licensee = require('./searches/find_licensee');// TODO: camel case
// creates
const create_product = require('./creates/create_product');// TODO: camel case

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
        [new_product.key]: new_product, // TODO: camel case
        [new_licensee.key]: new_licensee, // TODO: camel case
    },
    // If you want your searches to show up, you better include it here!
    searches: {
        [find_licensee.key]: find_licensee, // TODO: camel case
    },

    // If you want your creates to show up, you better include it here!
    creates: {
        [create_product.key]: create_product, // TODO: camel case
    },
};

// Finally, export the app.
module.exports = App;
