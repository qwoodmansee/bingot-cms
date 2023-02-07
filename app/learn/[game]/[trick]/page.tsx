import YoutubeDisplayer from '../../../../components/bingo-teacher-components/youtube-displayer';
import {
  getAllTricks,
  getTrick,
} from '../../../../domain-import-only/factories/trick-factory';

export async function generateStaticParams() {
  const allTricks = await getAllTricks({});

  return allTricks.items.map((trick) => ({
    game: 'oot',
    trick: trick.fields.name,
  }));
}

export default async function Page({ params: { name } }) {
  const trick = await getTrick({ name });
  if (trick) {
    return (
      <YoutubeDisplayer
        key={`${trick.name}`}
        videoUrl={trick.videoUrl}
        widthInPx={500}
        heightInPx={500}
      />
    );
  }

  return <>No Trick Found I guess</>;
}
