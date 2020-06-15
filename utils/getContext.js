const { Context, Constants } = require('netlicensing-client/dist/netlicensing-client.node');

module.exports = (bundle) => {
    const context = new Context();
    context.setSecurityMode(Constants.APIKEY_IDENTIFICATION);
    context.setApiKey(bundle.authData.apiKey);
    return context;
};
