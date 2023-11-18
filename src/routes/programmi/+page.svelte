<script lang="ts">
	import type { PageData } from "./$types";
	import { fade } from "svelte/transition";

	export let data: PageData;
</script>

<svelte:head>
	<title>Programmi</title>
	<meta name="description" content="I nostri Programmi" />

	<!-- og tags -->
	<meta property="og:title" content="Luino TV" />
	<meta property="og:description" content="La web TV dell'Alto Varesotto" />
	<meta property="og:image" content="https://luinotv.it/logo.png" />
	<meta property="og:url" content="https://luinotv.it" />
	<meta property="og:site_name" content="Luino TV" />
	<meta property="og:type" content="website" />

	<!-- twitter card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Luino TV" />
	<meta name="twitter:description" content="La web TV dell'Alto Varesotto" />
	<meta name="twitter:image" content="https://luinotv.it/logo.png" />
	<meta name="twitter:url" content="https://luinotv.it" />
	<meta name="twitter:site" content="@luinotv" />
</svelte:head>

<main transition:fade>
	<h1>Programmi</h1>

	{#each data.playlists as playlist}
		<div class="playlist" >
			<img src={playlist.thumbnail} alt={playlist.title}>
			<div class="playlistinfo">
				<h1>{playlist.title}</h1>
				<p>{playlist.description}</p>
			</div>
		</div>
	{/each}
</main>

<style>
	main {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.playlist {
		border: 1px solid #ccc;
		padding: 0.5em;
		border-radius: 0.5em;
		background-color: var(--secondary);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem 1rem;
	}

	.playlist img {
		border-radius: 0.5em;
		height: 10rem;
	}

	.playlistinfo {
		margin-left: 1rem;
		flex: 1;
	}

	.playlistinfo h1 {
		font-size: 1.5rem;
	}

	.playlistinfo p {
		font-size: 1rem;
	}

	h1 {
		margin-top: 0;
	}
</style>
	


