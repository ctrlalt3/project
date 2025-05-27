import HomeIcon from './icons/HomeIcon.jsx';
import MusicIcon from './icons/MusicIcon.jsx';
import SaveIcon from './icons/SaveIcon.jsx';
import PlusIcon from './icons/PlusIcon.jsx';
import Link from 'next/link.js';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full md:h-full md:w-[10vh] p-3 bg-zinc-800 border-t-2 md:border-t-0 md:border-l-2 border-amber-400 text-zinc-300 fixed bottom-0 md:relative">
      <ul className="w-full flex flex-row md:flex-col h-full justify-center items-center p-2 md:p-5">
        <article className="w-full items-center flex flex-row md:flex-col justify-between gap-4">
        <article>
          <li className='w-full p-3 bg-zinc-700 rounded-md hover:bg-zinc-600 cursor-pointer'>
            <Link href="/">
              <HomeIcon/>
            </Link>
          </li>
        </article>
          <li className='p-3 bg-zinc-700 rounded-md'>
            <Link href="/songs">
                <MusicIcon />
            </Link>
          </li>
          <li className='p-3 bg-zinc-700 rounded-md'>
            <Link href="/create">
              <PlusIcon />
            </Link>
          </li>
          <li className='p-3 bg-zinc-700 rounded-md'>
            <Link href="/save">
                <SaveIcon />
            </Link>
          </li>
        </article>
      </ul>
    </nav>
  );
}
