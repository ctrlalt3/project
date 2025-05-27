import Template from './components/Template.jsx';
import SongSearch from './components/SongSearch.jsx';
import prisma from '../lib/prisma.js';

export default async function Home() {
  const songs = await prisma.song.findMany();

  return (
    <Template>
      <main className="flex flex-col gap-3 w-full h-[90vh] bg-zinc-800 p-4">
        <SongSearch songs={songs} />
      </main>
    </Template>
  );
}

