'use client';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { IYoutubeVideoProps } from '../../domain-import-only/YoutubeVideo';

export interface YoutubeDisplayerProps {
  youtubeVideo: IYoutubeVideoProps;
  title: string;
}

export default function YoutubeDisplayer({
  title,
  youtubeVideo,
}: YoutubeDisplayerProps) {
  return (
    <div className='aspect-w-16'>
      <LiteYouTubeEmbed
        iframeClass='w-full'
        playerClass='hidden'
        title={title}
        poster='hqdefault'
        id={youtubeVideo.videoId}
        params={`start=${youtubeVideo.startTimeInSeconds}`}
      />
    </div>
  );
}
