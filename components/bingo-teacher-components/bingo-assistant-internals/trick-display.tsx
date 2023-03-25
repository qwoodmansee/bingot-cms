'use client';
import { TrickDto } from '../../../data-access-layer/mappers/trick-mapper';
import YoutubeDisplayer from '../youtube-displayer';

interface TrickDisplayProps {
  trick: TrickDto;
}

export const TrickDisplay = ({ trick }: TrickDisplayProps) => {
  const bgColor = trick.isFundamental ? 'bg-secondary text-white' : 'bg-white';
  return (
    <div className={`${bgColor} shadow-lg rounded-lg p-2`}>
      <h3 className='font-bold text-sm mb-1'>{trick.name}</h3>
      {trick.video && trick.video.videoId && (
        <YoutubeDisplayer title={trick.name} youtubeVideo={trick.video} />
      )}
      <span className='text-sm'>{trick.description}</span>
    </div>
  );
};
