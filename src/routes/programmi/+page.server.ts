import { getMockBannerAds } from '$lib/ads';
import { fetchPlaylistsInChannel } from '$lib/youtube';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		playlists: await fetchPlaylistsInChannel(import.meta.env.VITE_YOUTUBE_CHANNEL_ID, fetch),
		ads: (import.meta.env.DEV ? getMockBannerAds(3) : []).sort(() => Math.random() - 0.5),
	};
};
