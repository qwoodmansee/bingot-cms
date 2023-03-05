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
  const trick = await getTrick(decodeURI(trickName), cms);
  if (trick) {
    return (
      <YoutubeDisplayer
        key={`${trick.name}`}
        title={trick.name}
        youtubeVideo={{
          videoId: trick.video.videoId,
          startTimeInSeconds: trick.video.startTimeInSeconds,
        }}
      />
    );
  }

  return <>No Trick Found I guess</>;
}
