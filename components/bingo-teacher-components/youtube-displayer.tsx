'use client';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { YoutubeVideo } from '../../domain-import-only/YoutubeVideo';

export interface YoutubeDisplayerProps {
  youtubeVideo: YoutubeVideo;
  title: string;
}

export default function YoutubeDisplayer({
  title,
  youtubeVideo,
}: YoutubeDisplayerProps) {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <LiteYouTubeEmbed
        title={title}
        adNetwork={false}
        id={youtubeVideo.videoId}
        params={`start=${youtubeVideo.startTimeInSeconds}`}
      />
    </div>
  );
}
