import type { Ad } from './types/ads';

export const getMockAds = (n: number): Ad[] => {
	const ads: Ad[] = [];

	for (let i = 0; i < n; i++) {
		const type = Math.random() > 0.5 ? 'image' : 'video';

		ads.push({
			type: type,
			display: Math.random() > 0.5 ? 'sidebanner' : 'bottom',
			src:
				type == 'image'
					? `https://picsum.photos/seed/${Math.random()}/250`
					: '/sample_video_ad.mp4',
			href: `https://picsum.photos/seed/${Math.random()}/250`,
		});
	}

	return ads;
};
