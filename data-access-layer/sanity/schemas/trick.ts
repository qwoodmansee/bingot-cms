import { SchemaBuilder } from 'sanity-schema-builder';

const S = new SchemaBuilder();

export default S.document('trick')
  .title('Trick')
  .fields([
    S.string('name').title('Name'),
    S.array('names').of([S.string()]).title('Alternative Name(s)'),
    S.array('variants')
      .of([S.reference('variant').add('variant')])
      .title('Variants'),
    S.boolean('isUsuallyRequiredForBingo').title(
      'Is this trick usually required for bingo?'
    ),
    S.boolean('isFundamentalMovement').title(
      'Is this trick a Fundamental Movement Trick?'
    ),
    S.boolean('isV1Only').title(
      'Is this trick v1 exclusive (across all variants)?'
    ),
    S.blocks('notes').title('Notes'),
  ])
  .generate();
