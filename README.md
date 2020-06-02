<img src="https://netlicensing.io/img/netlicensing-stage-twitter.jpg">

# Labs64 NetLicensing / Zapier Integration

[![Build Status](https://travis-ci.org/Labs64/NetLicensing-Zapier.svg?branch=master)](https://travis-ci.org/Labs64/NetLicensing-Zapier)

[Labs64 NetLicensing](https://netlicensing.io) is a first-class solution in the Licensing as a Service (LaaS) sector. Based on open standards, it provides a cost effective, integrated and scalable platform for software vendors and developers who want to concentrate on their product’s core functionality instead of spending resources on developing an own license management software.

## Integrations

You can use Zapier to do Labs64 NetLicensing Automation.
Please refer to the NetLicensing triggers, searches and actions available at [Zapier](https://zapier.com/apps/netlicensing).

### Security

You need to be authenticated to use NetLicensing API. Use the following authentication options:
- Username/Password - provides full access to the NetLicensing API
- [API Key](https://netlicensing.io/wiki/security) *(recommended)* - provides limited access to the NetLicensing API based on the API Key Role. We suggest using roleId `ROLE_APIKEY_OPERATION` if you need to manage customers and licenses and roleId `ROLE_APIKEY_MAINTENANCE` is you need to manage product details.

### Triggers
- *New Product* - Triggers when a new product is created
- *New Licensee* - Triggers when a new licensee is created

### Searches
- *Find a Product* - Search a Product by its number
- *Find a Licensee* - Search a Licensee by its number

### Actions
- *Create Product* - Create a new Product
- *Create Licensee* - Create a new Licensee

## Bugs and Feedback

For bugs, questions and discussions please use the [GitHub Issues](https://github.com/Labs64/NetLicensing-Zapier/issues).
