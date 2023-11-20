import { fetchPlaylistsInChannel } from '$lib/youtube';
import type { PageServerLoad } from './$types';

export const load : PageServerLoad = async () => {
	return {
		playlists: await fetchPlaylistsInChannel(import.meta.env.VITE_YOUTUBE_CHANNEL_ID),
	};
};