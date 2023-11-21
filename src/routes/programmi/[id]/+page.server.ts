import { fetchPlaylist } from '$lib/youtube';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	return await fetchPlaylist(params.id, fetch);
};
