import React from 'react';

interface YoutubeDisplayerProps {
  videoUrl: string;
}
export default function YoutubeDisplayer({ videoUrl }: YoutubeDisplayerProps) {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        src={getEmbedUrl(videoUrl)}
        seamless
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}

const getEmbedUrl = (videoUrl: string) => {
  let result = videoUrl;
  const EMBED_PREFIX = 'https://www.youtube.com/embed/';

  const isShortUrl = videoUrl.indexOf('.be/') !== -1;
  if (isShortUrl) {
    result = EMBED_PREFIX + videoUrl.split('.be/')[1];
  }

  const hasVQueryParam = result.indexOf('v=') !== -1;

  // remove the list query param if it it's there
  const hasListQueryParam = result.indexOf('list=') !== -1;

  // for some reason embed syntax makes you change t= to start=
  result = result.replace('&t=', '&start=');
  result = result.replace('?t=', '?start=');

  if (hasVQueryParam || hasListQueryParam) {
    const urlParams = new URLSearchParams(result.split('?')[1]);

    // also have to remove the 's' after the number of seconds in the v query param syntax.
    let startTimeAddition = '';
    if (urlParams.has('start')) {
      const timeWithoutS = urlParams.get('start').split('s')[0];
      startTimeAddition = `?start=${timeWithoutS}`;
    }
    result = EMBED_PREFIX + urlParams.get('v') + startTimeAddition;
  }

  return result;
};
