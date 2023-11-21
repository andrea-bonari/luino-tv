import type { Playlist, Video } from './types/youtube';

export const fetchPlaylistsInChannel = async (channelId: string, cfetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)|null = null): Promise<Playlist[]> => {
	const request = cfetch || fetch;

	const res = await request(
		`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&key=${
			import.meta.env.VITE_YOUTUBE_API_KEY
		}`,
	);
	const data = await res.json();

	return await Promise.all(
		data.items.map(async (item: any) => ({
			title: item.snippet.title,
			description: item.snippet.description,
			thumbnail: item.snippet.thumbnails.maxres.url,
			id: item.id,
			videos: await fetchVideosInPlaylist(item.id, cfetch),
		})),
	);
};

export const fetchPlaylist = async (playlistId: string, cfetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)|null = null): Promise<Playlist> => {
	const request = cfetch || fetch;

	const res = await request(
		`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${
			import.meta.env.VITE_YOUTUBE_API_KEY
		}`,
	);
	const data = await res.json();

	const item = data.items[0];

	return {
		title: item.snippet.title,
		description: item.snippet.description,
		thumbnail: item.snippet.thumbnails.maxres.url,
		id: item.id,
		videos: await fetchVideosInPlaylist(item.id, cfetch),
	};
};

export const fetchVideosInPlaylist = async (playlistId: string, cfetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)|null = null): Promise<Video[]> => {
	const request = cfetch || fetch;

	const res = await request(
		`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${
			import.meta.env.VITE_YOUTUBE_API_KEY
		}`,
	);
	const data = await res.json();

	return data.items.map((item: any) => ({
		title: item.snippet.title,
		description: item.snippet.description,
		thumbnail: item.snippet.thumbnails.maxres.url,
		id: item.snippet.resourceId.videoId,
	}));
};
