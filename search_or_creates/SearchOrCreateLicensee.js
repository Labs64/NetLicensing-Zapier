const createLicensee = require('../creates/CreateLicensee');
const searchLicensee = require('../searches/FindLicensee');
const constants = require('../config/Constants');

module.exports = {
    key: searchLicensee.key,
    display: {
        // the label goes up in sidebar
        label: constants.search_or_creates.SEARCH_OR_CREATE_LICENSEE_LABEL,
        description: constants.search_or_creates.SEARCH_OR_CREATE_LICENSEE_DESCRIPTION,
    },
    search: searchLicensee.key,
    create: createLicensee.key,
};
