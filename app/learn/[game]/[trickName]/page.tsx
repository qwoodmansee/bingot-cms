import YoutubeDisplayer from '../../../../components/bingo-teacher-components/youtube-displayer';
import {
  getAllTricks,
  getTrick,
} from '../../../../data-access-layer/factories/trick-factory';

const cms = process.env.CMS;

export async function generateStaticParams() {
  const allTricks = await getAllTricks(cms);

  return allTricks.map((trick) => ({
    game: 'oot',
    trickName: encodeURI(trick.name),
  }));
}

export default async function Page({
  params: { trickName },
}: {
  params: { trickName: string };
}) {
  const trick = await getTrick(trickName, cms);
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
