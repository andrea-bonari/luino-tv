import type { Playlist, Video } from "$lib/types";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load = (async ({ fetch }) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${import.meta.env.VITE_CHANNEL_ID}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const processedData = data.items.map((item : any) => {
        return {
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.maxres.url,
            id: item.id,
            // eslint-disable-next-line no-async-promise-executor
            videos: new Promise(async (resolve) => {
                const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${item.id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
                const json = await res.json();

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                resolve(json.items.map((item : any) => {
                    return {
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnail: item.snippet.thumbnails.maxres.url,
                        id: item.snippet.resourceId.videoId
                    } satisfies Video
                }))
            })
        } satisfies Playlist;
    })
    
    return { playlists: processedData } as { playlists: Array<Playlist> };
}) satisfies PageLoad