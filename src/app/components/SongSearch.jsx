'use client';

import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import SaveIcon from './icons/SaveIcon.jsx';
import { saveSong } from "@/lib/services/SongServices.js";

export default function SongSearch({ songs }) {
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredSongs(songs);
  }, [songs]);

  useEffect(() => {
    const results = songs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(results);
  }, [searchTerm]);

  return (
    <>
      <div className="relative p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar canciones..."
            className="w-full p-3 pr-10 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 pointer-events-none"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <section className="w-full h-[70vh] rounded-md">
        <div className="h-full overflow-y-auto p-2 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-5">
            {filteredSongs.map((song) => (
              <Card
                key={song.id}
                id={song.id}
                name={song.title}
                info={song.artist}
                year={song.year}
                onClick = {saveSong}
                icon={<SaveIcon />}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}