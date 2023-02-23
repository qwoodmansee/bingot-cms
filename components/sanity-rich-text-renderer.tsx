'use client';
import { PortableText } from '@portabletext/react';
import { SanityImageComponent } from './sanity-image-component';

export default function SanityRichTextRenderer(props) {
  const { content } = props;

  return (
    <PortableText
      value={content}
      components={{
        types: {
          image: SanityImageComponent,
          // video: ({ value }) => (
          //   <video
          //     className='w-full rounded-lg'
          //     src={urlFor(value.asset).url()}
          //     controls
          //   />
          // ),
          quote: ({ value: { author, quote } }) => (
            <blockquote className='bg-gray-100 p-4 rounded-lg'>
              <p className='text-gray-700 text-2xl leading-10 mb-4'>{quote}</p>
              {author && <cite className='text-gray-600'>{author}</cite>}
            </blockquote>
          ),
          code: ({ value: { language, code } }) => (
            <pre className='bg-gray-100 p-4 rounded-lg overflow-x-scroll'>
              <code className={`language-${language}`}>{code}</code>
            </pre>
          ),
        },
      }}
    />
  );
}
