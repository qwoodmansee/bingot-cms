'use client';
import { PortableText } from '@portabletext/react';
import { SanityImageComponent } from './sanity-image-component';

export default function SanityRichTextRenderer({ content }) {
  return (
    <PortableText
      value={content}
      components={{
        types: {
          image: SanityImageComponent,
          block: ({ children }) => (
            <p className='text-gray-700 leading-7'>{children}</p>
          ),
          video: ({ node: { asset } }) => (
            <video
              className='w-full rounded-lg'
              src={urlFor(asset).url()}
              controls
            />
          ),
          quote: ({ node: { author, quote } }) => (
            <blockquote className='bg-gray-100 p-4 rounded-lg'>
              <p className='text-gray-700 text-2xl leading-10 mb-4'>{quote}</p>
              {author && <cite className='text-gray-600'>{author}</cite>}
            </blockquote>
          ),
          code: ({ node: { language, code } }) => (
            <pre className='bg-gray-100 p-4 rounded-lg overflow-x-scroll'>
              <code className={`language-${language}`}>{code}</code>
            </pre>
          ),
        },
      }}
    />
  );
}
