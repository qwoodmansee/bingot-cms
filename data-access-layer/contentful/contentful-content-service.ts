import { Entry, EntryCollection } from 'contentful';
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

export const getEntry = async <
  CTID extends ContentTypeID,
  CE extends ContentEntryByID<CTID>
>(
  contentId: string,
  contentTypeID: CTID
): Promise<Entry<CE['fields']>> => {
  return contentfulClient.getEntry(contentId, {
    content_type: contentTypeID,
    include: 10,
  });
};
