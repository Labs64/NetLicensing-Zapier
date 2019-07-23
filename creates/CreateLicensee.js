const { LicenseeService, Licensee, Context, Constants } = require('netlicensing-client/dist/netlicensing-client.node');

const createProduct = async (z, bundle) => {
    const context = new Context();
    context.setUsername(bundle.authData.username);
    context.setPassword(bundle.authData.password);
    context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

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
    licensee = await LicenseeService.create(context, bundle.inputData.productNumber, licensee);

    return licensee.getProperties();
};

module.exports = {
    key: 'create_licensee',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: 'Licensee',
    display: {
        label: 'Create Licensee',
        description: 'Creates a new licensee.',
    },

    // `operation` is where the business logic goes.
    operation: {
        inputFields: [
            { key: 'productNumber', required: true, type: 'string' },
            { key: 'name', required: false, type: 'string' },
            { key: 'number', required: false, type: 'string' },
            { key: 'active', required: false, type: 'boolean' },
        ],
        perform: createProduct,

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obviously dummy values that we can show to any user.
        sample: {
            id: 'P9F6UGCXK',
            name: 'licenseeName',
            number: 'P9F6UGCXK',
            active: true,
            productNumber: 'productNumber',
        },

        // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
        // field definitions. The result will be used to augment the sample.
        // outputFields: () => { return []; }
        // Alternatively, a static field definition should be provided, to specify labels for the fields
        outputFields: [
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Name' },
            { key: 'number', label: 'Number' },
            { key: 'active', label: 'Active' },
            { key: 'productNumber', label: 'Product number' },
        ],
    },
};
