<script lang="ts">
	import type { Ad } from '$lib/types/ads';
	import mock_side_ad from '$lib/images/mock_side_ad.webp';

	export let ads: Ad[];
	export let height: number;
	export let override: boolean = false;

	$: console.log(Math.floor((height - 16) / 266));
</script>

{#if !override}
	<main class="hidden gap-4 flex-col content-center justify-start m-3 min-w-[250px] md:flex">
		{#each ads as ad}
			<a href={ad.href}>
				{#if ad.type == 'image'}
					<img src={ad.src} alt="Pubblicità" height="250" width="250" />
				{:else}
					<video width="250" height="250" autoplay muted>
						<source src={ad.src} type="video/mp4" />
					</video>
				{/if}
			</a>
		{/each}
		{#if height}
			{#each new Array(Math.round((height - (16 + ads.length * 266)) / 266)) as _}
				<a href="https://luinotv.it/">
					<img src={mock_side_ad} alt="Pubblicità" height="250" width="250" />
				</a>
			{/each}
		{/if}
	</main>
{:else}
	<main class="gap-4 grid-cols-1 sm:grid-cols-3 m-3 min-w-[250px] grid w-full">
		{#each ads as ad}
			<a href={ad.href}>
				{#if ad.type == 'image'}
					<img src={ad.src} alt="Pubblicità" class="w-full" />
				{:else}
					<video class="w-full" autoplay muted>
						<source src={ad.src} type="video/mp4" />
					</video>
				{/if}
			</a>
		{/each}
	</main>
{/if}
