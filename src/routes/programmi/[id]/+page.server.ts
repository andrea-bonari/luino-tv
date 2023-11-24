import { getEpisodeAds, getMockEpisodeAds } from '$lib/ads';
import { fetchPlaylist } from '$lib/youtube';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	return await {
		playlist: fetchPlaylist(params.id, fetch),
		ads: (import.meta.env.DEV ? getMockEpisodeAds(2) : await getEpisodeAds()).sort(() => Math.random() - 0.5),
	};
};
