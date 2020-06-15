const { Context, Constants } = require('netlicensing-client/dist/netlicensing-client.node');

module.exports = (bundle) => {
    const context = new Context();
    context.setApiKey(bundle.authData.apiKey);
    context.setSecurityMode(Constants.APIKEY_IDENTIFICATION);
    return context;
};
