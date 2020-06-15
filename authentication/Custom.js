const constants = require('../config/Constants');

const test = (z) => {
    // Normally you want to make a request to an endpoint that is either specifically designed to test auth, or one that
    // every user will have access to, such as an account or profile endpoint like /me.
    // In this example, we'll hit httpbin, which validates the Authorization Header against the arguments passed in the
    // URL path

    // This method can return any truthy value to indicate the credentials are valid.
    // Raise an error to show
    return z.request({
        url: `${constants.BASE_HOST + constants.BASE_PATH}/utility/licensingModels`,
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        params: {},
    }).then((response) => {
        if (response.status === 401) {
            throw new Error(constants.authentication.LOGIN_FAILED_TEXT);
        } else if (response.status >= 500) {
            throw new Error(constants.authentication.SERVICE_UNAVAILABLE_TEXT);
        }
        return response;
    });
};

module.exports = {
    type: 'custom',

    // The test method allows Zapier to verify that the credentials a user provides are valid. We'll execute this
    // method whenver a user connects their account for the first time.
    test,
    // assuming "username" is a key returned from the test
    fields: [
        {
            key: 'apiKey',
            type: 'string',
            required: true,
            helpText: 'Go to the [Settings / API Access](https://ui.netlicensing.io/#/settings) tab in the NetLicensing Console to find your API Key.',
        },
    ],
};
