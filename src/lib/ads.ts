import type { Ad } from './types/ads';
import mock_side_ad from '$lib/images/mock_side_ad.webp';
import mock_banner_ad from '$lib/images/mock_banner_ad.webp';
import mock_episode_ad from '$lib/images/mock_episode_ad.webp';

export const getMockAds = (n: number): Ad[] => {
	const ads: Ad[] = [];

	for (let i = 0; i < n; i++) {
		ads.push({
			type: 'image',
			src: mock_side_ad,
			href: '#',
		});
	}

	return ads;
};

export const getAds = async () : Promise<Ad[]> => {
	const response = await fetch(`https://cdn.contentful.com/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE}/environments/master/entries?access_token=${import.meta.env.VITE_CONTENTFUL_TOKEN}&content_type=ad`);
	const data = await response.json();

	return data.items.map(({ fields }: any) => {
		return {
			type: 'image',
			src: `https:${(data.includes.Asset as any[]).find(v => v.sys.id == fields.image.sys.id).fields.file.url}`,
			href: fields.url,
		};
	});
};

export const getMockBannerAds = (n: number): Ad[] => {
	const ads: Ad[] = [];

	for (let i = 0; i < n; i++) {
		ads.push({
			type: 'image',
			src: mock_banner_ad,
			href: '#',
		});
	}

	return ads;
};

export const getBannerAds = async () : Promise<Ad[]> => {
	const response = await fetch(`https://cdn.contentful.com/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE}/environments/master/entries?access_token=${import.meta.env.VITE_CONTENTFUL_TOKEN}&content_type=programs-ad`);
	const data = await response.json();

	return data.items.map(({ fields } : any) => {
		return {
			type: 'image',
			src: `https:${(data.includes.Asset as any[]).find(v => v.sys.id == fields.image.sys.id).fields.file.url}`,
			href: fields.url,
		};
	});
};

export const getMockEpisodeAds = (n: number): Ad[] => {
	const ads: Ad[] = [];

	for (let i = 0; i < n; i++) {
		ads.push({
			type: 'image',
			src: mock_episode_ad,
			href: '#',
		});
	}

	return ads;
};

export const getEpisodeAds = async () : Promise<Ad[]> => {
	const response = await fetch(`https://cdn.contentful.com/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE}/environments/master/entries?access_token=${import.meta.env.VITE_CONTENTFUL_TOKEN}&content_type=episode-ad`);
	const data = await response.json();

	return data.items.map(({ fields } : any) => {
		return {
			type: 'image',
			src: `https:${(data.includes.Asset as any[]).find(v => v.sys.id == fields.image.sys.id).fields.file.url}`,
			href: fields.url,
		};
	});
};