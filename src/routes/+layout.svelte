<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import banner from '$lib/images/banner.png';
	import Navbar from '$lib/components/Navbar.svelte';
	import { getMockAds } from '$lib/ads';
	import SideAd from '$lib/components/SideAd.svelte';

	onMount(() => {
		if (import.meta.env.PROD) {
			(document.querySelector('.unverified') as HTMLElement).style.display = 'unset';
		}
	});

	const ads = getMockAds(10);
	const leftAds = ads.slice(0, ads.length / 2);
	const rightAds = ads.slice(ads.length / 2, ads.length);
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<img class="banner" src={banner} alt="LuinoTV">
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Navbar />
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="flex flex-row">
		<SideAd ads={leftAds} />
		<div class="flex flex-grow">
			<slot />
		</div>
		<SideAd ads={rightAds} />
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col justify-center content-center text-center p-5">
			<p class="mb-3">La web TV dell'alto Varesotto</p>
			<h6>Sito web prodotto da <a class="chip variant-soft hover:variant-filled" href="http://svasso-spensierato.web.app" target="_blank" rel="noopener noreferrer">Andrea Bonari</a></h6>
		</div>
	</svelte:fragment>
</AppShell>

<div class="unverified">
	Stai visualizzando una versione non verificata del sito web.
</div>

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