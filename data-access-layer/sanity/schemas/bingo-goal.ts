import { SchemaBuilder } from 'sanity-schema-builder';

const S = new SchemaBuilder();

export default S.document('bingoGoal')
  .title('Bingo Goal')
  .fields([
    S.string('name').title('Name'),
    S.array('requiredKnowledge')
      .of([
        S.reference('trick').add('trick'),
        S.reference('variant').add('variant'),
      ])
      .title('Required Knowledge'),
    S.blocks('notes').title('Notes'),
  ])
  .generate();
