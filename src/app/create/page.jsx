import Template from "../components/Template.jsx";
import SongCard from "../components/SongCard.jsx";
import { createSong } from "../../lib/services/SongServices.js";

export default async function DashboardPage() {
  const songs = await prisma.song.findMany();

  return (
    <Template>
      <main className="flex flex-col h-screen overflow-y-auto shadow-md text-zinc-300 gap-2 ">
        <section className="w-full flex flex-col items-center">
          <article className="w-full flex flex-col md:flex-row p-2 gap-5">
            <form
              action={createSong}
              className="w-full h-[38vh] justify-center flex flex-col gap-2 p-4 rounded-md"
            >
              <h1 className="text-4xl pb-5 text-left pt-7">Crear canción</h1>
              <label>Título</label>
              <input
                className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                type="text"
                name="title"
                id="song-title"
              />
              <label>Artista</label>
              <input
                className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                type="text"
                name="artist"
                id="song-artist"
              />
              <label>Año</label>
              <input
                className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                type="text"
                name="year"
                id="song-year"
              />
              <div className="flex justify-center items-center gap-3 pt-3">
                <button
                  type="submit"
                  className="w-30 h-10 bg-amber-400 text-zinc-900 rounded-sm cursor-pointer hover:bg-amber-300"
                >
                  Añadir
                </button>
              </div>
            </form>
          </article>
        </section>
        <section className="w-full h-[62vh]  rounded-md overflow-y-auto ">
          <div className="h-full overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-5">
              {songs.map((song) => (
                <SongCard key={song.id} song={song}/>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Template>
  );
}
