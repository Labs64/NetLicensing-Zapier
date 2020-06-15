<img src="https://netlicensing.io/img/netlicensing-stage-twitter.jpg">

# Labs64 NetLicensing / Zapier Integration

![CI - Zapier tests](https://github.com/Labs64/NetLicensing-Zapier/workflows/CI%20-%20Zapier%20tests/badge.svg)

[Labs64 NetLicensing](https://netlicensing.io) is a first-class solution in the Licensing as a Service (LaaS) sector. Based on open standards, it provides a cost effective, integrated and scalable platform for software vendors and developers who want to concentrate on their product’s core functionality instead of spending resources on developing an own license management software.

## Integrations

You can use Zapier to do Labs64 NetLicensing Automation.
Please refer to the NetLicensing triggers, searches and actions available at [Zapier](https://zapier.com/apps/netlicensing).

### Security

You need to be authenticated to use NetLicensing API. Use the following authentication options:
- [API Key](https://netlicensing.io/wiki/security) *(recommended)* - provides limited access to the NetLicensing API based on the API Key Role. We suggest using roleId `ROLE_APIKEY_OPERATION` if you need to manage customers and licenses and roleId `ROLE_APIKEY_MAINTENANCE` is you need to manage product details.

### Triggers
- *New Product* - Triggers when a new product is created
- *New Licensee* - Triggers when a new licensee is created

### Searches
- *Find Product* - Search product by its number
- *Find Licensee* - Search licensee by its number

### Actions
- *Create Product* - Create a new product
- *Create Licensee* - Create a new licensee
  - *Product Number* (required) - product number at NetLicensing
  - *Name* (optional) - Customer name
  - *Number* (optional) - Customer number; will be autogenerated if not provided
  - *Active* (optional) - Activate customer upon creation; default: `true`
- *Create License* - Create a new license
  - *TODO*

## Bugs and Feedback

For bugs, questions and discussions please use the [GitHub Issues](https://github.com/Labs64/NetLicensing-Zapier/issues).
