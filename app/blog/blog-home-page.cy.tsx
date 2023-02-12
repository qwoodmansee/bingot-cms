import { getAllPosts } from '../../data-access-layer/factories/post-factory';
import BlogHomePage from './blog-home-page';

// Cypress Component Test
describe('<Blog />', () => {
  it('should render and display expected content', async () => {
    const mockPosts = await getAllPosts('Mock');

    // Mount the React component for the About page
    cy.mount(<BlogHomePage allPosts={mockPosts} />);

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('BingoTeacher');

    cy.get('h2').contains(mockPosts[0].title);
    cy.get('h2').contains(mockPosts[1].title);

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get(`a[href="/blog/posts/${mockPosts[0].slug}"]`).should('be.visible');
    cy.get(`a[href="/blog/posts/${mockPosts[1].slug}"]`).should('be.visible');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
