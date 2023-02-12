import dotenvPlugin from 'cypress-dotenv';

// eslint-disable-next-line import/no-anonymous-default-export
export default (on, config) => {
  config = dotenvPlugin({ config });
  return config;
};
