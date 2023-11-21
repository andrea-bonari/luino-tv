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
	import { getMockAds } from '$lib/ads';
	import SideAd from '$lib/components/SideAd.svelte';
	import { afterNavigate } from '$app/navigation';
	import { inject } from '@vercel/analytics';

	inject({ mode: import.meta.env.PROD ? 'production' : 'development' });

	onMount(() => {
		if (import.meta.env.PROD) {
			(document.querySelector('.unverified') as HTMLElement).style.display = 'unset';
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

	const ads = getMockAds(10);
	const leftAds = ads.slice(0, ads.length / 2);
	const rightAds = ads.slice(ads.length / 2, ads.length);
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

	<div class="flex flex-row max-w-full">
		<SideAd ads={leftAds} />
		<div class="flex flex-grow px-2 md:px-0">
			<slot />
		</div>
		<SideAd ads={rightAds} />
	</div>

	<div class="flex md:hidden">
		<SideAd {ads} override={true} />
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col justify-center content-center text-center p-5">
			<p class="mb-3">La web TV dell'alto Varesotto</p>
			<h6>
				Sito web prodotto da <a
					class="chip variant-soft hover:variant-filled card-hover"
					href="http://svasso-spensierato.web.app"
					target="_blank"
					rel="noopener noreferrer">Andrea Bonari</a
				>
			</h6>
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
