import { createClient, EntryCollection } from 'contentful';
import * as G from './@types/generated/contentful';

type ContentType = G.IPost | G.IAuthor;

type ContentEntry<ID extends G.CONTENT_TYPE> = Pick<ContentType, 'fields'> & {
  sys: {
    contentType: {
      sys: {
        id: ID;
      };
    };
  };
};

type ContentTypeID<CT extends ContentType = ContentType> =
  CT['sys']['contentType']['sys']['id'];

type ContentEntryByID<ID extends G.CONTENT_TYPE> = Extract<
  ContentType,
  ContentEntry<ID>
>;

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
});

export const getEntries = async <
  CTID extends ContentTypeID,
  CE extends ContentEntryByID<CTID>
>(
  contentTypeID: CTID
): Promise<EntryCollection<CE['fields']>> => {
  return contentfulClient.getEntries({
    content_type: contentTypeID,
  });
};
