export type Video = {
	title: string;
	description: string;
	thumbnail: string;
	id: string;
};

export type Playlist = {
	title: string;
	description: string;
	thumbnail: string;
	id: string;
	videos: Video[];
};
