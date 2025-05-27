import Template from "../components/Template.jsx";
import prisma from "../../lib/prisma.js";
import Card from "../components/Card.jsx";
import { saveSong } from "@/lib/services/SongServices.js";
import SaveIcon from "../components/icons/SaveIcon.jsx";

export default async function DashboardSongs() {
  const songs = await prisma.song.findMany();
  return (
    <Template>
      <section className="h-[90vh] bg-zinc-800 pb-12">
        <label className="text-5xl pl-4 p-2 pt-7 block">Canciones</label>
        <div className="h-full overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-5">
            {songs.map((song) => (
              <Card
                key={song.id}
                id={song.id}
                name={song.title}
                info={song.artist}
                year={song.year}
                onClick={saveSong}
                icon={<SaveIcon/>}
              />
            ))}
          </div>
        </div>
      </section>
    </Template>
  );
}
