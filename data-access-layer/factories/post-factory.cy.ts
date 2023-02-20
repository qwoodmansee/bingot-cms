import { getPost } from './post-factory';

describe('getPost', () => {
  it.skip('utilizes the CMS environment variables and returns the correct implementation', () => {
    getPost('test-slug', 'Mock');
  });
});
