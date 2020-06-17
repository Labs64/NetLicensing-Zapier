const searchProduct = require('../searches/FindProduct');
const createProduct = require('../creates/CreateProduct');
const constants = require('../config/Constants');

module.exports = {
    key: searchProduct.key,
    display: {
        // the label goes up in sidebar
        label: constants.search_or_creates.SEARCH_OR_CREATE_PRODUCT_LABEL,
        description: constants.search_or_creates.SEARCH_OR_CREATE_PRODUCT_DESCRIPTION,
    },
    search: searchProduct.key,
    create: createProduct.key,
};
