module.exports = Object.freeze({
    BASE_HOST: 'https://go.netlicensing.io',
    BASE_PATH: '/core/v2/rest',
    authentication: {
        LOGIN_FAILED_TEXT: 'The username and/or password you supplied is incorrect',
        SERVICE_UNAVAILABLE_TEXT: 'Service temporary unavailable',
    },
    triggers: {
        NEW_LICENSEE_NOUN: 'Licensee',
        NEW_LICENSEE_LABEL: 'New Licensee',
        NEW_LICENSEE_DESCRIPTION: 'Triggers when a new licensee is created.',

        NEW_PRODUCT_NOUN: 'Product',
        NEW_PRODUCT_LABEL: 'New Product',
        NEW_PRODUCT_DESCRIPTION: 'Triggers when a new product is created.',
    },
    searches: {
        FIND_LICENSEE_NOUN: 'Licensee',
        FIND_LICENSEE_LABEL: 'Find a Licensee',
        FIND_LICENSEE_DESCRIPTION: 'Search for Licensee by number.',

        FIND_PRODUCT_NOUN: 'Product',
        FIND_PRODUCT_LABEL: 'Find a Product',
        FIND_PRODUCT_DESCRIPTION: 'Search for Product by number.',
    },
    search_or_creates: {
        SEARCH_OR_CREATE_LICENSEE_LABEL: 'Search Licensee or Create one',
        SEARCH_OR_CREATE_LICENSEE_DESCRIPTION: 'If not exist then create one.',

        SEARCH_OR_CREATE_PRODUCT_LABEL: 'Search Product or Create one',
        SEARCH_OR_CREATE_PRODUCT_DESCRIPTION: 'If not exist then create one.',
    },
    creates: {
        CREATE_LICENSEE_NOUN: 'Licensee',
        CREATE_LICENSEE_LABEL: 'Create Licensee',
        CREATE_LICENSEE_DESCRIPTION: 'Creates a new licensee.',

        CREATE_PRODUCT_NOUN: 'Product',
        CREATE_PRODUCT_LABEL: 'Create Product',
        CREATE_PRODUCT_DESCRIPTION: 'Creates a new product.',
    },
});
