import { createClient } from 'contentful';

const safelyCreateContentfulClient = () => {
  if (
    process.env.CMS === 'Contentful' &&
    process.env.CONTENTFUL_SPACE_ID &&
    process.env.CONTENTFUL_ACCESS_TOKEN &&
    process.env.CONTENTFUL_ENVIRONMENT
  )
    return createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
    });
};

export default safelyCreateContentfulClient();
