import { previewData } from 'next/headers';
import Link from 'next/link';
import LandingPageCTAs from '../components/bingo-teacher-components/landing-page-ctas';
import PreviewModeAlert from '../components/preview-mode-alert';
import PreviewSuspense from '../components/preview-suspense';
import { getAllGames } from '../data-access-layer/factories/game-factory';
import Image from 'next/image';

type AppPreviewData = { token: string } | undefined;

export default async function IndexPage() {
  if ((previewData() as AppPreviewData)?.token) {
    return (
      <PreviewSuspense fallback='Loading...'>
        <PreviewModeAlert />
      </PreviewSuspense>
    );
  }

  const games = await getAllGames();

  return (
    <>
      <h2>Welcome to SpeedrunTeacher. Check out our games:</h2>
      {games.map((g, i) => (
        <Link href={`/${g.slug}/`} key={`${g.name}${i}`}>
          {g.name}
          {/* <Image src={g.coverArt} alt={g.name} fill sizes='100vw' /> */}
        </Link>
      ))}
    </>
  );
}
