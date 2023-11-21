import { fetchPlaylist } from '$lib/youtube';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return await fetchPlaylist(params.id);
};
