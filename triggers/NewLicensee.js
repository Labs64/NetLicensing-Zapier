const constants = require('../config/Constants');

const listLicensees = (z, bundle) => {
    // You can build requests and our client will helpfully inject all the variables
    // you need to complete. You can also register middleware to control this.
    const options = {
        url: `${constants.BASE_HOST + constants.BASE_PATH}/licensee`,
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        params: {
            'filter=page=': bundle.meta.page,
        },
    };

    return z.request(options)
        .then((response) => {
            // v10.0.0 compatibility
            // response.throwForStatus();
            // const results = z.JSON.parse(response.content).items.item;

            const results = response.data.items.item;

            return results.map((item) => {
                const newProp = {};

                item.property.map((prop) => {
                    if (prop.name === 'number') {
                        newProp.id = prop.value;
                    }
                    newProp[prop.name] = prop.value;
                    return prop;
                });
                return newProp;
            });
        });
};

// We recommend writing your triggers separate like this and rolling them
// into the App definition at the end.
module.exports = {
    key: 'new_licensee',
    noun: constants.triggers.NEW_LICENSEE_NOUN,
    display: {
        label: constants.triggers.NEW_LICENSEE_LABEL,
        description: constants.triggers.NEW_LICENSEE_DESCRIPTION,
    },

    // `operation` is where the business logic goes.
    operation: {
        canPaginate: true,
        perform: listLicensees,

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
        //   outputFields: [
        //    () => { return []; }
        //   ]
        // For a more complete example of using dynamic fields see
        // https://github.com/zapier/zapier-platform-cli#customdynamic-fields.
        // Alternatively, a static field definition should be provided, to specify labels for the fields
        outputFields: [
            { key: 'id', label: 'ID', type: 'integer' },
            { key: 'active', label: 'Active', type: 'boolean' },
            { key: 'number', label: 'Number' },
        ],
    },

};
