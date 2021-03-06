const { ProductService, Product } = require('netlicensing-client/dist/netlicensing-client.node');
const constants = require('../config/Constants');
const getContext = require('../utils/getContext');

const createProduct = async (z, bundle) => {
    const context = getContext(bundle);

    let product = new Product()
    
    product.setName(bundle.inputData.name);

    if (bundle.inputData.number !== undefined) {
        product.setNumber(bundle.inputData.number);
    }
    if (bundle.inputData.active !== undefined) {
        product.setActive(bundle.inputData.active);
    }
    if (bundle.inputData.version !== undefined) {
        product.setVersion(bundle.inputData.version);
    }
    if (bundle.inputData.licenseeAutoCreate !== undefined) {
        product.setLicenseeAutoCreate(bundle.inputData.licenseeAutoCreate);
    }
    if (bundle.inputData.description !== undefined) {
        product.setDescription(bundle.inputData.description);
    }
    if (bundle.inputData.licensingInfo !== undefined) {
        product.setLicensingInfo(bundle.inputData.licensingInfo);
    }

    product = await ProductService.create(context, product);

    return product.getProperties();
};

module.exports = {
    key: 'create_product',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: constants.creates.CREATE_PRODUCT_NOUN,
    display: {
        label: constants.creates.CREATE_PRODUCT_LABEL,
        description: constants.creates.CREATE_PRODUCT_DESCRIPTION,
    },

    // `operation` is where the business logic goes.
    operation: {
        inputFields: [
            { key: 'name', required: true, type: 'string' },
            { key: 'number', required: false, type: 'string' },
            { key: 'active', required: false, type: 'boolean' },
            { key: 'version', required: false, type: 'string' },
            { key: 'licenseeAutoCreate', required: false, type: 'boolean' },
            { key: 'description', required: false, type: 'string' },
            { key: 'licensingInfo', required: false, type: 'string' },
        ],
        perform: createProduct,

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obviously dummy values that we can show to any user.
        sample: {
            id: 'P9F6UGCXK',
            name: 'Product Name',
            number: 'PROD-01',
            active: true,
            version: '1.0',
            licenseeAutoCreate: true,
            description: 'Product Description',
            licensingInfo: 'Product Licensing Info',
        },

        // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
        // field definitions. The result will be used to augment the sample.
        // outputFields: () => { return []; }
        // Alternatively, a static field definition should be provided, to specify labels for the fields
        outputFields: [
            { key: 'id', label: 'ID', type: 'integer' },
            { key: 'name', label: 'Name' },
            { key: 'number', label: 'Number' },
            { key: 'active', label: 'Active', type: 'boolean' },
            { key: 'version', label: 'Version' },
            { key: 'licenseeAutoCreate', label: 'Licensee Auto-Create', type: 'boolean' },
            { key: 'description', label: 'Description' },
            { key: 'licensingInfo', label: 'Licensing Info' },
        ],
    },
};
