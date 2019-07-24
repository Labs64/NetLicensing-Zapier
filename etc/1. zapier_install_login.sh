#!/bin/sh
echo 'NetLicensing / Zapier integration: initialize environment'

# install the CLI globally
npm install -g zapier-platform-cli

zapier login
