<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { fade, scale, slide } from 'svelte/transition';

	export let data: PageData;

	let animate = false;

	const triggerAnim = () => {
		animate = true;
	};
</script>

<svelte:head>
	<title>LuinoTV - {data.playlist.title}</title>
	<meta name="description" content={data.playlist.description} />
	<meta name="keywords" content="luino, tv, luinotv, programmi, video, streaming, diretta, live" />

	<meta property="og:title" content="LuinoTV - {data.playlist.title}" />
	<meta property="og:description" content={data.playlist.description} />
	<meta property="og:image" content={data.playlist.thumbnail} />
	<meta property="og:url" content="https://luinotv.it/programmi/{data.playlist.id}" />
	<meta property="og:site_name" content="LuinoTV" />
	<meta property="og:locale" content="it_IT" />
	<meta property="og:type" content="website" />
	<meta property="og:author" content="LuinoTV" />
	<meta property="og:author:email" content="redazione@luinotv.it" />
	<meta property="og:author:website" content="https://luinotv.it/" />
	<meta property="og:author:url" content="https://luinotv.it/" />
	<meta property="og:author:role" content="Publisher" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LuinoTV - {data.playlist.title}" />
	<meta name="twitter:description" content={data.playlist.description} />
	<meta name="twitter:image" content={data.playlist.thumbnail} />
	<meta name="twitter:image:alt" content="LuinoTV" />
	<meta name="twitter:site" content="@LuinoTv" />
	<meta name="twitter:creator" content="@LuinoTv" />
</svelte:head>

{#if animate}
	<div class="fixed inset-0 bg-black z-20" in:fade={{ duration: 200 }}></div>
{/if}

<main class="flex flex-col w-full">
	<div
		in:scale
		id="img"
		class="
        mt-4
        w-full
        h-screen
        max-h-[30rem]
        md:max-h-[40rem]
        p-8
        relative
        overflow-hidden
        block
        z-10
                
        bg-cover
        bg-no-repeat
        bg-center
        "
		style:background-image={`url(${data.playlist.thumbnail})`}
	>
		<div
			class="flex flex-col variant-filled-primary p-4 rounded-2xl text-[rgba(var(--theme-font-color-dark))]"
		>
			<h1 class="h1">{data.playlist.title}</h1>
			<h4 class="h4 mt-2">{data.playlist.videos.length} Episodi</h4>
			<p class="mt-4 text-[rgba(var(--theme-font-color-dark))] blockquote drop-shadow-2xl">
				{data.playlist.description}
			</p>
			{#if data.playlist.videos.length > 0}
			<a
				on:click={triggerAnim}
				class="btn card-hover variant-filled-secondary w-min self-end mt-4"
				href="https://youtube.com/watch?v={data.playlist.videos[0].id}&list={data.playlist.id}&index=1">Riproduci</a
			>
			{/if}
		</div>
	</div>

	<h3 class="mt-4 h3 text-center" in:fade={{ delay: 125 }}>Episodi</h3>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-4"
	>
		{#each data.playlist.videos as video, i}
			<a
				on:click={triggerAnim}
				in:slide|global={{ delay: 125 + 62 * i }}
				class="card text-center card-hover flex flex-col justify-between"
				href="https://youtube.com/watch?v={video.id}&list={data.playlist.id}&index={i + 1}"
			>
				<header class="card-header">
					<img src={video.thumbnail} alt={video.id} />
				</header>
				<section class="p-4">
					<h2 class="h4">{video.title}</h2>
					<p class="h6">{video.description}</p>
				</section>
				<footer class="card-footer">Episodio {i + 1}</footer>
			</a>

			{#if i % import.meta.env.VITE_AD_PER_EPISODE == 0 && data.ads.length > i / import.meta.env.VITE_AD_PER_EPISODE}
				<a href={data.ads[i / import.meta.env.VITE_AD_PER_EPISODE].href}>
					{#if data.ads[i / import.meta.env.VITE_AD_PER_EPISODE].type == 'image'}
						<img src={data.ads[i / import.meta.env.VITE_AD_PER_EPISODE].src} alt="Pubblicità" class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border" />
					{:else}
						<video width="250" height="250" autoplay muted>
							<source src={data.ads[i / import.meta.env.VITE_AD_PER_EPISODE].src} type="video/mp4" class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border" />
						</video>
					{/if}
				</a>
			{/if}
		{/each}

		{#each data.ads as ad, i}
			<!-- vedi ../+page.svelte:77 -->
			{#if data.playlist.videos.length <= import.meta.env.VITE_AD_PER_EPISODE && i + 1 > data.playlist.videos.length / import.meta.env.VITE_AD_PER_EPISODE || i > data.playlist.videos.length / import.meta.env.VITE_AD_PER_EPISODE}
				<a href={ad.href}>
					{#if ad.type == 'image'}
						<img src={ad.src} alt="Pubblicità" class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border" />
					{:else}
						<video width="250" height="250" autoplay muted>
							<source src={ad.src} type="video/mp4" class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border" />
						</video>
					{/if}
				</a>
			{/if}
			
		{/each}
	</div>
</main>

<style>
</style>
