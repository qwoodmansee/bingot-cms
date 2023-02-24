import { SchemaBuilder } from 'sanity-schema-builder';

const S = new SchemaBuilder();

export default S.document('post')
  .title('Post')
  .fields([
    S.string('title').title('Title'),
    S.slug('slug').title('Slug'),
    S.blocks('content').title('Content'),
    S.string('excerpt').title('Excerpt'),
    S.image('coverImage').title('Cover Image'),
    S.date('date').title('Date'),
    S.reference('author').add('author').title('Author'),
  ])
  .generate();
