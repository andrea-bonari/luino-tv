<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import {
		AppBar,
		AppShell,
		Drawer,
		LightSwitch,
		Toast,
		getDrawerStore,
		initializeStores,
	} from '@skeletonlabs/skeleton';
	import banner from '$lib/images/banner.webp';
	import Navbar from '$lib/components/Navbar.svelte';
	import { getMockAds, getAds } from '$lib/ads';
	import SideAd from '$lib/components/SideAd.svelte';
	import { afterNavigate } from '$app/navigation';
	import { inject } from '@vercel/analytics';
	import type { Ad } from '$lib/types/ads';

	inject({ mode: import.meta.env.PROD ? 'production' : 'development' });

	let fetchAds : Promise<Ad[]> = new Promise(resolve => resolve([]));
	let height: number;

	onMount(() => {
		if (import.meta.env.DEV) {
			fetchAds = new Promise(resolve => resolve(getMockAds(10)));
		} else {
			(document.querySelector('.unverified') as HTMLElement).style.display = 'unset';
			fetchAds = getAds();
		}
	});

	afterNavigate(() => {
		document.querySelector('#page')?.scrollTo({ top: 0, behavior: 'smooth' });
	});

	initializeStores();

	const drawerStore = getDrawerStore();

	const closeDrawer = () => {
		drawerStore.close();
	};
</script>

<Drawer position="right" width="w-min">
	<div class="flex flex-col items-end">
		<button on:click={closeDrawer} class="m-4 mb-0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				class="h-12 fill-token"
				viewBox="0 0 24 24"
			>
				<path
					d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
				></path>
			</svg>
		</button>
		<ul class="list m-4 mt-1">
			<li class="float-right h1"><a href="/" on:click={closeDrawer}>Home</a></li>
			<li class="float-right h1"><a href="/programmi" on:click={closeDrawer}>Programmi</a></li>
			<li class="float-right h1"><a href="/contatti" on:click={closeDrawer}>Contatti</a></li>
		</ul>
		<div class="m-4">
			<LightSwitch />
		</div>
	</div>
</Drawer>

<Toast />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<img class="banner" src={banner} alt="LuinoTV" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Navbar />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	{#await fetchAds}
		<div class="flex flex-row max-w-full">
			<SideAd ads={[]} bind:height />
			<div class="flex flex-grow px-2 md:px-0" bind:clientHeight={height}>
				<slot />
			</div>
			<SideAd ads={[]} bind:height />
		</div>

		<div class="flex md:hidden">
			<SideAd ads={[]} override={true} bind:height />
		</div>
	{:then ads} 
		<div class="flex flex-row max-w-full">
			<SideAd ads={ads.slice(0, ads.length / 2)} bind:height />
			<div class="flex flex-grow px-2 md:px-0">
				<slot />
			</div>
			<SideAd ads={ads.slice(ads.length / 2, ads.length)} bind:height />
		</div>

		<div class="flex md:hidden">
			<SideAd {ads} override={true} bind:height />
		</div>
	{/await}


	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col justify-center content-center text-center p-5">
			<p class="mb-3">La web TV dell'alto Varesotto</p>
		</div>
	</svelte:fragment>
</AppShell>

<div class="unverified">Stai visualizzando una versione non verificata del sito web.</div>

<style>
	.unverified {
		display: none;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 1em;
		font-weight: bold;
		background: #f00;
		color: #000;
		text-align: center;
	}

	.banner {
		height: 3em;
	}
</style>
