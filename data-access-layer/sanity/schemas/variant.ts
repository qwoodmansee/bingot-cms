import { SchemaBuilder } from 'sanity-schema-builder';

const S = new SchemaBuilder();

export default S.document('variant')
  .title('Variant')
  .fields([
    S.string('name').title('Name'),
    S.blocks('notes').title('Notes'),
    S.array('tutorials')
      .of([S.reference('tutorial').add('tutorial')])
      .title('Tutorial'),
  ])
  .generate();
