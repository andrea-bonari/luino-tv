import type { Playlist, Video } from './types/youtube';

export const fetchPlaylistsInChannel = async (channelId: string): Promise<Playlist[]> => {
	const res = await fetch(
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
			videos: await fetchVideosInPlaylist(item.id),
		})),
	);
};

export const fetchPlaylist = async (playlistId: string): Promise<Playlist> => {
	const res = await fetch(
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
		videos: await fetchVideosInPlaylist(item.id),
	};
};

export const fetchVideosInPlaylist = async (playlistId: string): Promise<Video[]> => {
	const res = await fetch(
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
