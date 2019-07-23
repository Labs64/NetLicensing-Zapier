const { LicenseeService, Context, Constants } = require('netlicensing-client/dist/netlicensing-client.node');

const context = new Context();
// context.setBaseUrl('https://go.netlicensing.io/core/v2/rest/L-61529828');
context.setUsername('demo');
context.setPassword('demo');
context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

LicenseeService.get(context, 'L-61529828')
    .then((licensee) => {
        console.log(licensee.getProperties());
        // return [licensee.getProperties()]
    });