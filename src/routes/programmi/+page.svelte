<script lang="ts">
	import { slide } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>LuinoTV - Programmi</title>
	<meta name="description" content="Guarda i programmi di LuinoTV" />
	<meta name="keywords" content="luino, tv, luinotv, programmi, video, streaming, diretta, live" />

	<meta property="og:title" content="LuinoTV - Programmi" />
	<meta property="og:description" content="Guarda i programmi di LuinoTV" />
	<meta property="og:image" content="https://luinotv.it/favicons/android-chrome-256x256.png" />
	<meta property="og:url" content="https://luinotv.it/programmi/" />
	<meta property="og:site_name" content="LuinoTV" />
	<meta property="og:locale" content="it_IT" />
	<meta property="og:type" content="website" />
	<meta property="og:author" content="LuinoTV" />
	<meta property="og:author:email" content="redazione@luinotv.it" />
	<meta property="og:author:website" content="https://luinotv.it/" />
	<meta property="og:author:url" content="https://luinotv.it/" />
	<meta property="og:author:role" content="Publisher" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LuinoTV - Programmi" />
	<meta name="twitter:description" content="Guarda i programmi di LuinoTV" />
	<meta name="twitter:image" content="https://luinotv.it/favicons/android-chrome-256x256.png" />
	<meta name="twitter:image:alt" content="LuinoTV" />
	<meta name="twitter:site" content="@LuinoTv" />
	<meta name="twitter:creator" content="@LuinoTv" />
</svelte:head>

<main class="flex flex-col content-center w-full">
	<h1 class="h1 text-center my-4">Programmi</h1>

	<div class="flex flex-col gap-4 items-center">
		{#each data.playlists as playlist, i}
			{#if i % import.meta.env.VITE_AD_PER_PROGRAM == 0 && data.ads.length > i / import.meta.env.VITE_AD_PER_PROGRAM}
				<a href={data.ads[i / import.meta.env.VITE_AD_PER_PROGRAM].href}>
					{#if data.ads[i / import.meta.env.VITE_AD_PER_PROGRAM].type == 'image'}
						<img src={data.ads[i / import.meta.env.VITE_AD_PER_PROGRAM].src} alt="Pubblicità" class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border" />
					{:else}
						<video width="250" height="250" autoplay muted>
							<source src={data.ads[i / import.meta.env.VITE_AD_PER_PROGRAM].src} type="video/mp4" class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border" />
						</video>
					{/if}
				</a>
			{/if}

			<div
				class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border"
				in:slide|global={{ delay: 62 * i }}
			>
				<a href="./programmi/{playlist.id}">
					<div
						class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden rounded-lg"
						style="background-image: url({playlist.thumbnail})"
					/>
				</a>
				<div
					class="w-full variant-filled-surface p-4 flex flex-col justify-between leading-normal rounded-lg"
				>
					<div class="mb-8">
						<div class="font-bold text-xl mb-2">{playlist.title}</div>
						<p class="text-base">{playlist.description}</p>
					</div>
					<a
						href="/programmi/{playlist.id}/"
						class="self-end w-min btn variant-filled-secondary card-hover">Guarda</a
					>
				</div>
			</div>
		{/each}
		
		{#each data.ads as ad, i}
			<!-- Spero di non dover mai più toccare questa condizione -->
			{#if data.playlists.length <= import.meta.env.VITE_AD_PER_PROGRAM && i + 1 > data.playlists.length / import.meta.env.VITE_AD_PER_PROGRAM || i > data.playlists.length / import.meta.env.VITE_AD_PER_PROGRAM}
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
