import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';

// Barebones lazy-loaded image component
export const SanityImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={urlBuilder().image(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading='lazy'
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};
