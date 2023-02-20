import { defineConfig } from 'cypress';
import * as dotenvFlow from 'dotenv-flow';

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    setupNodeEvents(on, config) {
      dotenvFlow.config();
      config.env = {
        ...config.env,
        ...process.env,
      };

      return config;
    },
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
