export async function generateStaticParams() {
  return [{ game: 'oot' }];
}

export default async function Page({ params: { game } }) {
  return <>Learn {game} Speedrunning and Bingo Tricks</>;
}
