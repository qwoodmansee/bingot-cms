import { getAllPosts } from '../../data-access-layer/factories/post-factory';
import BlogHomePage from './blog-home-page';

describe('<BlogHomePage />', () => {
  it('should render and display expected content', async () => {
    const mockPosts = await getAllPosts('Mock');

    cy.mount(<BlogHomePage allPosts={mockPosts} />);

    cy.get('[data-cy=hero-post-title]').should('have.text', mockPosts[0].title);

    cy.get('[data-cy=post-preview-title]').should(
      'have.text',
      mockPosts[1].title
    );

    // *Following* the link is better suited to an E2E test
    cy.get(`a[href="/blog/posts/${mockPosts[0].slug}"]`).should('be.visible');
    cy.get(`a[href="/blog/posts/${mockPosts[1].slug}"]`).should('be.visible');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
