module.exports = Object.freeze({
    BASE_HOST: 'https://go.netlicensing.io',
    BASE_PATH: '/core/v2/rest',
    NLIC_USERNAME: 'demo',
    NLIC_PASSWORD: 'demo',
    NLIC_APIKEY: '2e531c4a-eab3-40df-b17e-1ae66ea3d206',
    authentication: {
        LOGIN_FAILED_TEXT: 'The APIKey you supplied is incorrect',
        SERVICE_UNAVAILABLE_TEXT: 'Service temporary unavailable',
    },
    triggers: {
        NEW_LICENSEE_NOUN: 'Licensee',
        NEW_LICENSEE_LABEL: 'New Licensee',
        NEW_LICENSEE_DESCRIPTION: 'Triggers when a new licensee is created',

        NEW_PRODUCT_NOUN: 'Product',
        NEW_PRODUCT_LABEL: 'New Product',
        NEW_PRODUCT_DESCRIPTION: 'Triggers when a new product is created',
    },
    searches: {
        FIND_LICENSEE_NOUN: 'Licensee',
        FIND_LICENSEE_LABEL: 'Find a Licensee',
        FIND_LICENSEE_DESCRIPTION: 'Search a Licensee by its number',

        FIND_PRODUCT_NOUN: 'Product',
        FIND_PRODUCT_LABEL: 'Find a Product',
        FIND_PRODUCT_DESCRIPTION: 'Search a Product by its number',
    },
    search_or_creates: {
        SEARCH_OR_CREATE_LICENSEE_LABEL: 'Search or Create Licensee',
        SEARCH_OR_CREATE_LICENSEE_DESCRIPTION: 'Create a Licensee if this does not exist',

        SEARCH_OR_CREATE_PRODUCT_LABEL: 'Search or Create Product',
        SEARCH_OR_CREATE_PRODUCT_DESCRIPTION: 'Create a Product if this does not exist',
    },
    creates: {
        CREATE_LICENSEE_NOUN: 'Licensee',
        CREATE_LICENSEE_LABEL: 'Create Licensee',
        CREATE_LICENSEE_DESCRIPTION: 'Create a new Licensee',

        CREATE_PRODUCT_NOUN: 'Product',
        CREATE_PRODUCT_LABEL: 'Create Product',
        CREATE_PRODUCT_DESCRIPTION: 'Create a new Product',
    },
});
