import { SchemaBuilder } from 'sanity-schema-builder';

const S = new SchemaBuilder();

export default S.document('tutorial')
  .title('Tutorial')
  .fields([
    S.string('name').title('Name'),
    S.blocks('notes').title('Notes'),
    S.string('youtubeUrl').title('Youtube Url'),
  ])
  .generate();
