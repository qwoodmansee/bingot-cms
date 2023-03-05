import { getAllGoals } from '../../data-access-layer/factories/goal-factory';
import { GoalMapper } from '../../data-access-layer/mappers/goal-mapper';
import { BingoAssistant } from './bingo-assistant';

describe.skip('BingoAssistant', () => {
  it('displays all goals by default', async () => {
    const goals = await (await getAllGoals('Mock')).slice(0, 2);

    cy.mount(<BingoAssistant goals={goals.map((g) => GoalMapper.toJSON(g))} />);

    cy.contains(goals[0].name);
    cy.contains(goals[1].name);
  });

  it('allows searching for a goal', async () => {
    const goals = await (await getAllGoals('Mock')).slice(0, 2);

    cy.mount(<BingoAssistant goals={goals.map((g) => GoalMapper.toJSON(g))} />);

    cy.contains(goals[0].name);
    cy.contains(goals[1].name);

    cy.get('[name="search"]').type(goals[0].name);
    cy.contains(goals[0].name);
    cy.get('[name="search"]').type(goals[1].name);
    cy.contains(goals[1].name);
    cy.get('[name="search"]').type('not a goal');
    cy.contains('No goals found with that name!');
  });

  it('allows toggling the display of fundamental tricks', async () => {
    const goals = await (await getAllGoals('Mock')).slice(0, 2);

    cy.mount(<BingoAssistant goals={goals.map((g) => GoalMapper.toJSON(g))} />);

    cy.contains(goals[0].name);
    cy.contains(goals[1].name);

    cy.get('.font-bold.bg-secondary.text-white').should('exist');
    cy.get('[type="checkbox"]').click();
    cy.get('.font-bold.bg-secondary.text-white').should('not.exist');
  });

  it('allows expanding and collapsing a goal', async () => {
    const goals = await (await getAllGoals('Mock')).slice(0, 2);

    cy.mount(<BingoAssistant goals={goals.map((g) => GoalMapper.toJSON(g))} />);

    cy.contains(goals[0].name);
    cy.contains(goals[1].name);

    cy.get('h3').eq(0).click();
    cy.get('.bg-secondary.text-white').should('not.exist');
    cy.get('h3').eq(0).click();
    cy.get('.bg-secondary.text-white').should('exist');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
