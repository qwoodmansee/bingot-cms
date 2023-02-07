'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import markdownStyles from './markdown-styles.module.css';
import RichTextAsset from './rich-text-asset';
import { Document } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

// const customMarkdownOptions = (content) => ({
//   renderNode: {
//     [BLOCKS.EMBEDDED_ASSET]: (node) => (
//       <RichTextAsset
//         id={node.data.target.sys.id}
//         assets={content.links.assets.block}
//       />
//     ),
//   },
// });

export default function PostBody({ content }: { content: ReactNode }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className={markdownStyles['markdown']}>{content}</div>
    </div>
  );
}

// export default function PostBody({ content }: { content: Document }) {
//   return (
//     <div className='max-w-2xl mx-auto'>
//       <div className={markdownStyles['markdown']}>
//         {documentToReactComponents(content, customMarkdownOptions(content))}
//       </div>
//     </div>
//   );
// }
