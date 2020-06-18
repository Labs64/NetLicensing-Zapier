const { LicenseService, License } = require('netlicensing-client/dist/netlicensing-client.node');
const constants = require('../config/Constants');
const getContext = require('../utils/getContext');

const createLicense = async (z, bundle) => {
    const context = getContext(bundle);

    let license = new License();

    if (bundle.inputData.active !== undefined) {
        license.setActive(bundle.inputData.active);
    }
    if (bundle.inputData.number !== undefined) {
        license.setNumber(bundle.inputData.number);
    }
    if (bundle.inputData.name !== undefined) {
        license.setName(bundle.inputData.name);
    }
    if (bundle.inputData.price !== undefined) {
        license.addProperty('price', bundle.inputData.price);
    }
    if (bundle.inputData.currency !== undefined) {
        license.addProperty('currency', bundle.inputData.currency);
    }
    if (bundle.inputData.parentfeature !== undefined) {
        license.addProperty('parentfeature', bundle.inputData.parentfeature);
    }
    if (bundle.inputData.timeVolume !== undefined) {
        license.addProperty('timeVolume', bundle.inputData.timeVolume);
    }
    if (bundle.inputData.timeVolumePeriod !== undefined) {
        license.addProperty('timeVolumePeriod', bundle.inputData.timeVolumePeriod);
    }
    if (bundle.inputData.startDate !== undefined) {
        license.addProperty('startDate', bundle.inputData.startDate);
    }
    if (bundle.inputData.quantity !== undefined) {
        license.addProperty('quantity', bundle.inputData.quantity);
    }
    if (bundle.inputData.usedQuantity !== undefined) {
        license.addProperty('usedQuantity', bundle.inputData.usedQuantity);
    }
    license = await LicenseService.create(context, bundle.inputData.licenseeNumber, bundle.inputData.licenseTemplateNumber, null, license);

    return license.getProperties();
};

module.exports = {
    key: 'create_license',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: constants.creates.CREATE_LICENSE_NOUN,
    display: {
        label: constants.creates.CREATE_LICENSE_LABEL,
        description: constants.creates.CREATE_LICENSE_DESCRIPTION,
    },

    // `operation` is where the business logic goes.
    operation: {
        inputFields: [
            { key: 'licenseeNumber', required: true, type: 'string' },
            { key: 'licenseTemplateNumber', required: true, type: 'string' },
            { key: 'active', required: true, type: 'boolean' },
            { key: 'number', required: false, type: 'string' },
            { key: 'name', required: false, type: 'string' },
            { key: 'price', required: false, type: 'number' },
            { key: 'currency', required: false, type: 'string' },
            { key: 'parentfeature', required: false, type: 'string' },
            { key: 'timeVolume', required: false, type: 'string' },
            { key: 'timeVolumePeriod', required: false, type: 'string' },
            { key: 'startDate', required: false, type: 'string' },
            { key: 'quantity', required: false, type: 'string' },
            { key: 'usedQuantity', required: false, type: 'string' },
        ],
        perform: createLicense,

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obviously dummy values that we can show to any user.
        sample: {
            id: 'L9F6UGCXK',
            licenseeNumber: 'CUST-NUM-01',
            licenseTemplateNumber: 'TMPL-NUM-01',
            active: true,
            number: 'LIC-NUM-01',
            name: 'License Name',
            price: 64.64,
            currency: 'EUR',
            parentfeature: 'LIC-NUM-00',
            timeVolume: '1',
            timeVolumePeriod: 'month',
            startDate: 'now',
            quantity: '64',
            usedQuantity: '46',
        },

        // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
        // field definitions. The result will be used to augment the sample.
        // outputFields: () => { return []; }
        // Alternatively, a static field definition should be provided, to specify labels for the fields
        outputFields: [
            { key: 'id', label: 'ID', type: 'integer' },
            { key: 'licenseeNumber', label: 'Licensee/Customer Number' },
            { key: 'licenseTemplateNumber', label: 'LicenseTemplate Number' },
            { key: 'active', label: 'Active', type: 'boolean' },
            { key: 'number', label: 'Number' },
            { key: 'name', label: 'Name' },
            { key: 'price', label: 'Price' },
            { key: 'currency', label: 'Currency' },
            { key: 'parentfeature', label: 'Parent Feature' },
            { key: 'timeVolume', label: 'Time Volume' },
            { key: 'timeVolumePeriod', label: 'Time Volume Period' },
            { key: 'startDate', label: 'Start Date' },
            { key: 'quantity', label: 'Quantity' },
            { key: 'usedQuantity', label: 'Used Quantity' },
        ],
    },
};
