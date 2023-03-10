/* Legacy function from an older version which may be helpful in the future */
export const getEmbedUrl = (videoUrl: string) => {
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

export const inconsistentMvpGetVideoIdFromUrl = (videoUrl: string) => {
  const isShortUrl = videoUrl.indexOf('.be/') !== -1;
  if (isShortUrl) {
    const withQueryParams = videoUrl.split('.be/')[1];
    return withQueryParams.split('?')[0];
  }

  const hasVQueryParam = videoUrl.indexOf('v=') !== -1;

  if (hasVQueryParam) {
    const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
    return urlParams.get('v');
  }

  return null;
};

export const inconsistentMvpGetStartTimeFromUrl = (videoUrl: string) => {
  const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
  const timeAsString = urlParams.get('t');
  if (timeAsString === null || timeAsString === '') return 0;
  return parseInt(timeAsString);
};
