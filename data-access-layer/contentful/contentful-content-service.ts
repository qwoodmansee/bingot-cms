import { EntryCollection } from 'contentful';
import { contentfulClient } from './contentful-client';
import { ContentTypeID, ContentEntryByID } from './contentful-types';

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
