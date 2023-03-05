'use client';
import { TrickDto } from '../../../data-access-layer/mappers/trick-mapper';
import YoutubeDisplayer from '../youtube-displayer';

interface TrickDisplayProps {
  trick: TrickDto;
}

export const TrickDisplay = ({ trick }: TrickDisplayProps) => {
  const bgColor = trick.isFundamental ? 'bg-secondary text-white' : 'bg-white';
  return (
    <div className={`${bgColor} shadow-lg rounded-lg p-4 font-bold`}>
      <h4>{trick.name}</h4>
      <YoutubeDisplayer title={trick.name} youtubeVideo={trick.video} />
    </div>
  );
};
