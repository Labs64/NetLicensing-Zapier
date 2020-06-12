#!/bin/sh

echo 'NetLicensing / Zapier integration: initialize environment'

# install the CLI globally
npm install -g zapier-platform-cli
rm -rf node_modules && npm i

# ref: https://platform.zapier.com/cli_docs/docs

zapier test

zapier login
