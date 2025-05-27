'use client';

import { useRouter } from 'next/navigation';
import Card from './Card.jsx';
import EditIcon from './icons/EditIcon.jsx';

export default function SongCard({ song }) {
  const router = useRouter();

  return (
    <Card
      id={song.id}
      name={song.title}
      info={song.artist}
      year={song.year}
      onClick={() => router.push(`/create/${song.id}`)}
      icon={<EditIcon/>}
    />
  );
}