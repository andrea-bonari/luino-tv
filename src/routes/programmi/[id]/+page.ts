import type { Video } from "$lib/types";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async ({ fetch, params }) => {
    const page = params.id;

    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${page}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return { videos: data.items.map((item : any) => {
            return {
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.maxres.url,
                id: item.snippet.resourceId.videoId
            } satisfies Video
        }) as { videos: Array<Video> } };
    } catch (_) {
        console.log(error)
        error(404, "Programma non trovato")
    }
}) satisfies PageLoad;