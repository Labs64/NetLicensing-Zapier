const { Context, Constants } = require('netlicensing-client/dist/netlicensing-client.node');

module.exports = (bundle) => {
    const context = new Context();
    if (bundle.authData.username.trim() && bundle.authData.password.trim()) {
        context.setUsername(bundle.authData.username);
        context.setPassword(bundle.authData.password);
        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);
    } else {
        context.setApiKey(bundle.authData.apiKey);
        context.setSecurityMode(Constants.APIKEY_IDENTIFICATION);
    }
    return context;
};
