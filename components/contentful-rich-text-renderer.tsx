'use client';
import markdownStyles from './markdown-styles.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import RichTextAsset from './rich-text-asset';

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
});

export default function ContentfulRichTextRenderer({ content }) {
  return (
    <div className={markdownStyles['markdown']}>
      {documentToReactComponents(content, customMarkdownOptions(content))}
    </div>
  );
}
