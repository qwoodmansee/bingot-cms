import Link from 'next/link';
import { getAllTricks } from '../../data-access-layer/factories/trick-factory';
import { getAllGames } from '../../data-access-layer/factories/game-factory';
import LandingPageCTAs from '../../components/bingo-teacher-components/landing-page-ctas';

export async function generateStaticParams() {
  const games = await getAllGames();

  return games.map((game) => ({
    game: game.slug,
    gameName: game.name,
  }));
}

export default async function Page({ params: { gameName, game: gameSlug } }) {
  return (
    <>
      <h2>{gameName}</h2>
      <LandingPageCTAs gameSlug={gameSlug} />
    </>
  );
}
