'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Template from '../components/Template';
import Card from '../components/Card';
import DeleteIcon from '../components/icons/DeleteIcon';
import { deleteSong } from '../../lib/services/SongServices';

export default function DashboardSavesClient({ saves: initialSaves }) {
  const [saves, setSaves] = useState(initialSaves);
  const router = useRouter();

  const handleDelete = async (id, save) => {
    const result = await deleteSong(id);
    if (result?.success) {
      // ✅ Opcional: puedes volver a cargar la página entera si prefieres
    //   router.refresh();

      // ✅ Actualiza localmente el estado sin recargar
      setSaves((prev) => prev.filter((s) => s.id !== save.id));
    } 
  };

  return (
    <Template>
      <main className="flex flex-col gap-3 w-full h-[90vh] bg-zinc-800 p-4">
        <section className="w-full h-[88vh] rounded-md">
          <h1 className="text-5xl p-3">Guardadas</h1>
          <div className="h-full overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {saves.map((save) => (
                <Card
                  key={save.id}
                  id={save.id}
                  name={save.title}
                  icon={<DeleteIcon />}
                  onClick={() => handleDelete(save.id, save)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Template>
  );
}
