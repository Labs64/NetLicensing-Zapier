module.exports = Object.freeze({
    BASE_HOST: 'https://go.netlicensing.io',
    BASE_PATH: '/core/v2/rest',
    // TODO(RVA): a permanent API key is needed, now the API key can be removed since it was created on a demo account
    NLIC_APIKEY_TEST: 'c52d947d-548c-42a5-8908-d26e240addbc',
    authentication: {
        LOGIN_FAILED_TEXT: 'The APIKey you supplied is incorrect',
        SERVICE_UNAVAILABLE_TEXT: 'Service temporary unavailable',
    },
    triggers: {
        NEW_PRODUCT_NOUN: 'Product',
        NEW_PRODUCT_LABEL: 'New Product',
        NEW_PRODUCT_DESCRIPTION: 'Triggers when new product is created',

        NEW_LICENSEE_NOUN: 'Licensee',
        NEW_LICENSEE_LABEL: 'New Licensee',
        NEW_LICENSEE_DESCRIPTION: 'Triggers when new licensee is created',
    },
    searches: {
        SEARCH_PRODUCT_NOUN: 'Product',
        SEARCH_PRODUCT_LABEL: 'Search Product',
        SEARCH_PRODUCT_DESCRIPTION: 'Search product by its number',

        SEARCH_LICENSEE_NOUN: 'Licensee',
        SEARCH_LICENSEE_LABEL: 'Search Licensee',
        SEARCH_LICENSEE_DESCRIPTION: 'Search licensee by its number',
    },
    search_or_creates: {
        SEARCH_OR_CREATE_PRODUCT_LABEL: 'Search and create Product',
        SEARCH_OR_CREATE_PRODUCT_DESCRIPTION: 'Create product if this does not exist',

        SEARCH_OR_CREATE_LICENSEE_LABEL: 'Search and create Licensee',
        SEARCH_OR_CREATE_LICENSEE_DESCRIPTION: 'Create licensee if this does not exist',
    },
    creates: {
        CREATE_PRODUCT_NOUN: 'Product',
        CREATE_PRODUCT_LABEL: 'Create Product',
        CREATE_PRODUCT_DESCRIPTION: 'Create new product',

        CREATE_LICENSEE_NOUN: 'Licensee',
        CREATE_LICENSEE_LABEL: 'Create Licensee',
        CREATE_LICENSEE_DESCRIPTION: 'Create new licensee',

        CREATE_LICENSE_NOUN: 'License',
        CREATE_LICENSE_LABEL: 'Create License',
        CREATE_LICENSE_DESCRIPTION: 'Create new license',
    },
});
