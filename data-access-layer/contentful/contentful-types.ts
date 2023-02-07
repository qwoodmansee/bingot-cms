import * as G from './@types/generated/contentful';

type ContentType = G.IPost | G.IAuthor | G.IBingoGoal | G.ITrick;

type ContentEntry<ID extends G.CONTENT_TYPE> = Pick<ContentType, 'fields'> & {
  sys: {
    contentType: {
      sys: {
        id: ID;
      };
    };
  };
};

export type ContentTypeID<CT extends ContentType = ContentType> =
  CT['sys']['contentType']['sys']['id'];

export type ContentEntryByID<ID extends G.CONTENT_TYPE> = Extract<
  ContentType,
  ContentEntry<ID>
>;
