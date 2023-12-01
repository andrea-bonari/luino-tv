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
			thumbnail: fetchThumbnail(item.snippet.thumbnails),
			id: item.id,
			videos: await fetchVideosInPlaylist(item.id, cfetch),
		})),
	);
};

export const fetchPlaylist = async (playlistId: string, cfetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)|null = null, maxVideos = -1): Promise<Playlist> => {
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
		thumbnail: fetchThumbnail(item.snippet.thumbnails),
		id: item.id,
		videos: await fetchVideosInPlaylist(item.id, cfetch, maxVideos),
	};
};

export const fetchVideosInPlaylist = async (playlistId: string, cfetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)|null = null, maxVideos = -1): Promise<Video[]> => {
	const request = cfetch || fetch;

	const videos : any[] = [];
	let nextPageToken = '';

	while((maxVideos === -1 && nextPageToken != undefined) || (maxVideos != -1 && videos.length < maxVideos)) {
		const res = await request(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&pageToken=${nextPageToken}&key=${
				import.meta.env.VITE_YOUTUBE_API_KEY
			}`,
		);

		const data = await res.json();

		nextPageToken = data.nextPageToken;

		videos.push(...data.items);
	}

	if(maxVideos === -1) {
		return videos.map((item: any) => ({
			title: item.snippet.title,
			description: item.snippet.description,
			thumbnail: fetchThumbnail(item.snippet.thumbnails),
			id: item.snippet.resourceId.videoId,
		}));
	} else {
		return videos.map((item: any) => ({
			title: item.snippet.title,
			description: item.snippet.description,
			thumbnail: fetchThumbnail(item.snippet.thumbnails),
			id: item.snippet.resourceId.videoId,
		})).slice(0, maxVideos);
	}
};

export const getVideosInChannel = async (channelId: string, cfetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)|null = null, maxVideos = -1): Promise<Video[]> => {
	const request = cfetch || fetch;

	const res = await request(
		`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${
			import.meta.env.VITE_YOUTUBE_API_KEY
		}`,
	);

	const data = await res.json();

	return (await fetchPlaylist(data.items[0].contentDetails.relatedPlaylists.uploads, cfetch, maxVideos)).videos;
};

const fetchThumbnail = (obj: any) : string => {
	if (obj.maxres) {
		return obj.maxres.url;
	}

	if(obj.standard) {
		return obj.standard.url;
	}

	if(obj.high) {
		return obj.high.url;
	}

	if(obj.medium) {
		return obj.medium.url;
	}

	if(obj.default) {
		return obj.default.url;
	}

	return '';
};