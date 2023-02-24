import { SchemaBuilder } from 'sanity-schema-builder';

const S = new SchemaBuilder();

export default S.document('author')
  .title('Author')
  .fields([S.string('name').title('Name'), S.image('picture').title('Picture')])
  .generate();
