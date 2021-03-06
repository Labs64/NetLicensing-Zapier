const { ProductService } = require('netlicensing-client/dist/netlicensing-client.node');
const constants = require('../config/Constants');
const getContext = require('../utils/getContext');

const getProduct = async (z, bundle) => {
    const context = getContext(bundle);
    const product = await ProductService.get(context, bundle.inputData.number);
    return [product.getProperties()];
};

module.exports = {
    key: 'search_product',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: constants.searches.SEARCH_PRODUCT_NOUN,
    display: {
        label: constants.searches.SEARCH_PRODUCT_LABEL,
        description: constants.searches.SEARCH_PRODUCT_DESCRIPTION,
    },

    // `operation` is where we make the call to your API to do the search
    operation: {
        // This search only has one search field. Your searches might have just one, or many
        // search fields.
        inputFields: [
            {
                key: 'number',
                type: 'string',
                label: 'Product number',
            },
        ],

        perform: getProduct,

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obviously dummy values that we can show to any user.
        sample: {
            id: 1,
            active: true,
            number: 'productNumber',
            name: 'Product name',
            version: '1.0',
            licenseeAutoCreate: true,
        },

        // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
        // field definitions. The result will be used to augment the sample.
        // outputFields: () => { return []; }
        // Alternatively, a static field definition should be provided, to specify labels for the fields
        outputFields: [
            { key: 'id', label: 'ID', type: 'integer' },
            { key: 'active', label: 'Active', type: 'boolean' },
            { key: 'number', label: 'Number' },
            { key: 'name', label: 'Name' },
            { key: 'version', label: 'Version' },
            { key: 'licenseeAutoCreate', label: 'Licensee Auto-Create', type: 'boolean' },
        ],
    },
};
