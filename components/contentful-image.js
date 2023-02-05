import Image from 'next/image';

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props) => {
  return (
    <Image
      loader={contentfulLoader}
      alt='contentful-image'
      {...props}
      style={{
        maxWidth: '100%',
      }}
    />
  );
};

export default ContentfulImage;
