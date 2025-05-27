"use server";
import prisma from "../prisma.js";
import { revalidatePath } from 'next/cache';

export async function getSong(id) {
    const songId = parseInt(id);
    try {
        const song = await prisma.song.findUnique({
            where: { id: songId },
        });
        if (!song) {
            throw new Error("Canción no encontrada");
        }
        return song;
    } catch (error) {
        console.error("Error fetching song:", error);
        throw error;
    } 
}
export async function createSong(formData) {
try {
    await prisma.song.create({
    data: {
        title: formData.get("title"),
        artist: formData.get("artist"),
        year: parseInt(formData.get("year")),
    },
    });
    revalidatePath('/create');
    return { success: "Canción creada exitosamente" };
} catch (error) {
    console.error("Error creating song:", error);
    return { error: "Error al crear canción" };
}
}
export async function updateSong(formData) {
try {
    const songId = parseInt(formData.get("hidden"));
    
    // Create an object to store only non-empty fields
    const updateData = {};
    
    const title = formData.get("tittle");
    const artist = formData.get("artist");
    const yearStr = formData.get("year");
    
    if (title) updateData.title = title;
    if (artist) updateData.artist = artist;
    if (yearStr) updateData.year = parseInt(yearStr);
    
    // Only update if there are fields to update
    if (Object.keys(updateData).length > 0) {
    await prisma.song.update({
        where: {
        id: songId
        },
        data: updateData
    });
    return { success: "Canción actualizada exitosamente" };
    } else {
    return { error: "No se proporcionaron campos para actualizar" };
    }
} catch (error) {
    console.error("Error updating song:", error);
    return { error: "Error al actualizar canción" };
}
}
export async function saveSong(formData) {
    const id = parseInt(formData.get("hidden"));
    try {
        await prisma.save.create({
        data: {
            songId: id, // Assuming 'hidden' contains the song ID
            title: formData.get("name"),
        },
        });
        
        return { success: "Canción creada exitosamente" };
    } catch (error) {
        console.error("Error creating song:", error);
        return { error: "Error al crear canción" };
    }
}
export async function deleteSong(id) {
    const idF = parseInt(id);
    try {
        await prisma.save.delete({
            where: { id: idF },
        });
        return { success: "Canción eliminada exitosamente" };   
    }catch (error) {
        console.error("Error deleting song:", error);
        return { error: "Error al eliminar canción" };
    }
    
}
