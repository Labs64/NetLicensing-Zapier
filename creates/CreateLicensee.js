const { LicenseeService, Licensee } = require('netlicensing-client/dist/netlicensing-client.node');
const constants = require('../config/Constants');
const getContext = require('../utils/getContext');

const createLicensee = async (z, bundle) => {
    const context = getContext(bundle);

    let licensee = new Licensee();
    if (bundle.inputData.name !== undefined) {
        licensee.setName(bundle.inputData.name);
    }
    if (bundle.inputData.number !== undefined) {
        licensee.setNumber(bundle.inputData.number);
    }
    if (bundle.inputData.active !== undefined) {
        licensee.setActive(bundle.inputData.active);
    }
    if (bundle.inputData.email !== undefined) {
        licensee.addProperty('email', bundle.inputData.email);
    }
    if (bundle.inputData.address1 !== undefined) {
        licensee.addProperty('address1', bundle.inputData.address1);
    }
    if (bundle.inputData.zip !== undefined) {
        licensee.addProperty('zip', bundle.inputData.zip);
    }
    if (bundle.inputData.country !== undefined) {
        licensee.addProperty('country', bundle.inputData.country);
    }
    if (bundle.inputData.companyName !== undefined) {
        licensee.addProperty('companyName', bundle.inputData.companyName);
    }
    if (bundle.inputData.fullName !== undefined) {
        licensee.addProperty('fullName', bundle.inputData.fullName);
    }
    licensee = await LicenseeService.create(context, bundle.inputData.productNumber, licensee);

    return licensee.getProperties();
};

module.exports = {
    key: 'create_licensee',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: constants.creates.CREATE_LICENSEE_NOUN,
    display: {
        label: constants.creates.CREATE_LICENSEE_LABEL,
        description: constants.creates.CREATE_LICENSEE_DESCRIPTION,
    },

    // `operation` is where the business logic goes.
    operation: {
        inputFields: [
            { key: 'productNumber', required: true, type: 'string' },
            { key: 'name', required: false, type: 'string' },
            { key: 'number', required: false, type: 'string' },
            { key: 'active', required: false, type: 'boolean' },
            { key: 'email', required: false, type: 'string' },
            { key: 'address1', required: false, type: 'string' },
            { key: 'zip', required: false, type: 'string' },
            { key: 'country', required: false, type: 'string' },
            { key: 'companyName', required: false, type: 'string' },
            { key: 'fullName', required: false, type: 'string' },
        ],
        perform: createLicensee,

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obviously dummy values that we can show to any user.
        sample: {
            id: 'P9F6UGCXK',
            name: 'licenseeName',
            number: 'P9F6UGCXK',
            active: true,
            productNumber: 'productNumber',
            email: 'test@netlicensing.com',
            address1: 'Radlkoferstraße 2',
            zip: '81373',
            country: 'Germany',
            companyName: 'Company name',
            fullName: 'Full name',
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
            { key: 'productNumber', label: 'Product Number' },
            { key: 'email', label: 'Email' },
            { key: 'address1', label: 'Address' },
            { key: 'zip', label: 'ZIP' },
            { key: 'country', label: 'Country' },
            { key: 'companyName', label: 'Company Name' },
            { key: 'fullName', label: 'Full Name' },
        ],
    },
};
