const { LicenseeService, Context, Constants } = require('netlicensing-client/dist/netlicensing-client.node');
const constants = require('../config/Constants');

const getLicensee = async (z, bundle) => {
    const context = new Context();
    context.setUsername(bundle.authData.username);
    context.setPassword(bundle.authData.password);
    context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

    const licensee = await LicenseeService.get(context, bundle.inputData.number);

    return [licensee.getProperties()];
};

module.exports = {
    key: 'find_licensee',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: constants.searches.FIND_LICENSEE_NOUN,
    display: {
        label: constants.searches.FIND_LICENSEE_LABEL,
        description: constants.searches.FIND_LICENSEE_DESCRIPTION,
    },

    // `operation` is where we make the call to your API to do the search
    operation: {
        // This search only has one search field. Your searches might have just one, or many
        // search fields.
        inputFields: [
            {
                key: 'number',
                type: 'string',
                label: 'Licensee number',
            },
        ],

        perform: getLicensee,

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obviously dummy values that we can show to any user.
        sample: {
            id: 1,
            active: true,
            number: 'licenseeNumber',
        },

        // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
        // field definitions. The result will be used to augment the sample.
        // outputFields: () => { return []; }
        // Alternatively, a static field definition should be provided, to specify labels for the fields
        outputFields: [
            { key: 'id', label: 'id' },
            { key: 'active', label: 'active' },
            { key: 'number', label: 'number' },
        ],
    },
};
