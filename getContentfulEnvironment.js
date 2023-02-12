/* eslint-disable @typescript-eslint/no-var-requires */
const contentfulManagement = require('contentful-management');
require('dotenv-flow').config();

module.exports = function () {
  console.log('error here 1?');
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });

  console.log('error here 2?');
  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
