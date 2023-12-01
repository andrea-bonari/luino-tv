import { getVideosInChannel } from '$lib/youtube';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		videos: await getVideosInChannel(import.meta.env.VITE_YOUTUBE_CHANNEL_ID, fetch, 9),
	};
};