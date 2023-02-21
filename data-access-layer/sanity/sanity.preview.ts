'use client';

import { definePreview } from 'next-sanity/preview';
import { dataset, projectId } from './sanity.client';

if (!projectId && !dataset) {
  throw new Error('missing project id or dataset. check your .env');
}

const onPublicAccessOnly = () => {
  throw new Error('Unable to show preview as you are not logged in');
};

// export const usePreview = definePreview({
//   projectId,
//   dataset,
//   onPublicAccessOnly,
// });
