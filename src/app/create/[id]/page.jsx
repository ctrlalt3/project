'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Template from "../../components/Template.jsx";
import { updateSong, getSong } from "../../../lib/services/SongServices.js";

export default function DashboardEditSong() {
  const params = useParams();
  const id = params.id;
  const [songData, setSongData] = useState({ title: '', artist: '', year: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await getSong(id);
        setSongData({
          title: data.title,
          artist: data.artist,
          year: data.year.toString()
        });
      } catch (err) {
        setError('Error cargando la canción');
      } finally {
        setLoading(false);
      }
    };
    
    fetchSong();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSongData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Template>
      <div className="h-screen overflow-y-auto shadow-md text-zinc-300 p-5 ">
        <section className="w-full flex flex-col items-center">
          <article className="w-full flex flex-col md:flex-row gap-5 items">
            <form action={updateSong} className="w-full flex flex-col gap-2 p-4  rounded-md">
              <h1 className="text-4xl pt-4 pb-10 text-left">Editar Canción</h1>
              <input type="hidden" name="hidden" value={id}/>
              <label>Titulo</label> 
              <input 
                className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400" 
                type="text" 
                name="title" 
                value={songData.title}
                onChange={handleInputChange}
              />
              <label>Artista</label>
              <input 
                className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400" 
                type="text" 
                name="artist" 
                value={songData.artist}
                onChange={handleInputChange}
              />
              <label>Año</label>
              <input 
                className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400" 
                type="text" 
                name="year" 
                value={songData.year}
                onChange={handleInputChange}
              />
              <div className="flex justify-center items-center gap-3 pt-3">
                <button 
                  type="submit" 
                  className="w-30 h-10 bg-amber-400 text-black rounded-sm cursor-pointer hover:bg-amber-300"
                >
                  Guardar
                </button>
              </div>
            </form>
          </article>
        </section>
        
      </div>
    </Template>
  );
}


