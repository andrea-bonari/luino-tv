import type { Ad } from './types/ads';
import mock_side_ad from '$lib/images/mock_side_ad.webp';
import mock_banner_ad from '$lib/images/mock_banner_ad.webp';

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

	return data.items.map(({ fields } : any, i : number) => {
		return {
			type: 'image',
			src: `https:${data.includes.Asset[i].fields.file.url}`,
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