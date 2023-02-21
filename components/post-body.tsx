'use client';
import ContentfulRichTextRenderer from './contentful-rich-text-renderer';
import SanityRichTextRenderer from './sanity-rich-text-renderer';

// really ugly thing here - cms is necessary to know how to render rich text style content.
// didn't want to make the env var public so it will come down from the server. Switching this
// version on the client would be possible but worthless, it would just ruin rendering.
export default function PostBody({ content, cms }) {
  return (
    <div className='max-w-2xl mx-auto'>
      {cms === 'Contentful' && <ContentfulRichTextRenderer content={content} />}

      {cms === 'Sanity' && <SanityRichTextRenderer content={content} />}

      {cms === 'Mock' && (
        <h3>Mock Content Body - Rich Text Not Supported with Mock CMS</h3>
      )}
    </div>
  );
}
