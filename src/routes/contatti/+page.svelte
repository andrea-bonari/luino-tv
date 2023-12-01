<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ActionData } from './$types';
	import { slide } from 'svelte/transition';
	import logo from '$lib/images/logo.webp';

	export let form: ActionData;

	const toastStore = getToastStore();

	$: if (form) {
		if (form.status == 200) {
			toastStore.trigger({
				message: 'Messaggio inviato con successo!',
				background: 'variant-filled-success',
			});
		} else if (form.status == 400) {
			toastStore.trigger({
				message: "Errore nell'invio del messaggio!",
				background: 'variant-filled-error',
			});
		}
	}
</script>

<svelte:head>
	<title>LuinoTV - Contatti</title>
	<meta name="description" content="Contatta LuinoTV" />
	<meta name="keywords" content="luino, tv, luinotv, contatti, email, telefono, social media" />

	<meta property="og:title" content="LuinoTV - Contatti" />
	<meta property="og:description" content="Contatta LuinoTV" />
	<meta property="og:image" content="https://luinotv.it/favicons/android-chrome-256x256.png" />
	<meta property="og:url" content="https://luinotv.it/contatti/" />
	<meta property="og:site_name" content="LuinoTV" />
	<meta property="og:locale" content="it_IT" />
	<meta property="og:type" content="website" />
	<meta property="og:author" content="LuinoTV" />
	<meta property="og:author:email" content="redazione@luinotv.it" />
	<meta property="og:author:website" content="https://luinotv.it/" />
	<meta property="og:author:url" content="https://luinotv.it/" />
	<meta property="og:author:role" content="Publisher" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LuinoTV - Contatti" />
	<meta name="twitter:description" content="Contatta LuinoTV" />
	<meta name="twitter:image" content="https://luinotv.it/favicons/android-chrome-256x256.png" />
	<meta name="twitter:image:alt" content="LuinoTV" />
	<meta name="twitter:site" content="@LuinoTv" />
	<meta name="twitter:creator" content="@LuinoTv" />
</svelte:head>

<main class="flex flex-col content-center w-full items-center">
	<img class="min-w-[15rem] w-[40%]" src={logo} alt="Immagine LuinoTV">

    <h4 class="h4 text-justify">Web TV dedicata all'Alto Varesotto. Produciamo programmi di informazione, intrattenimento e attualità in collaborazione con l'Accademia SG Academy.</h4>

    <a class="btn variant-filled-secondary w-min mt-5" href="/programmi/">Vai ai programmi</a>

    <hr class="h-px my-4 bg-gray-200 border-1 dark:bg-gray-700" />

    <h3 class="h3">Palinsesto</h3>

    <li class="list-dl w-full text-token card p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="card">
            <span class="flex-auto p-2">
                <dt class="font-bold">Dante Brancarisano</dt>
                <dd class="text-sm opacity-50">Direttore</dd>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto p-2 mt-0">
                <dt class="font-bold">Dario Lucini</dt>
                <dd class="text-sm opacity-50">Vicedirettore</dd>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto p-2">
                <dt class="font-bold">Fulvia Andreani</dt>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto p-2">
                <dt class="font-bold">Nicole Sansano</dt>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto p-2">
                <dt class="font-bold">Lidia Nardone</dt>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto p-2">
                <dt class="font-bold">Emily Sommariva</dt>
            </span>
        </div>
    </li>

	<h1 class="w-full text-center h1 mt-3 mb-5">Contatti</h1>

	<div class="logo-cloud grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-0.5" in:slide>
		<a
			class="logo-item card-hover variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="https://www.facebook.com/luinotv"
		>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="64"
					height="64"
					viewBox="0 0 24 24"
				>
					<path
						class="fill-token"
						d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"
					></path>
				</svg>
			</span>
			<span>Facebook</span>
		</a>
		<a
			class="logo-item card-hover variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="https://www.instagram.com/luinotv/"
		>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="64"
					height="64"
					viewBox="0 0 24 24"
				>
					<path
						class="fill-token"
						d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
					></path>
				</svg>
			</span>
			<span>Instagram</span>
		</a>
		<a
			class="logo-item card-hover variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="https://www.tiktok.com/@luinotv"
		>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="64"
					height="64"
					viewBox="0 0 24 24"
				>
					<path
						class="fill-token"
						d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"
					></path>
				</svg>
			</span>
			<span>TikTok</span>
		</a>
		<a
			class="logo-item card-hover variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="https://www.youtube.com/@LuinoTv"
		>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="64"
					height="64"
					viewBox="0 0 24 24"
				>
					<path
						class="fill-token"
						d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"
					></path>
				</svg>
			</span>
			<span>Youtube</span>
		</a>
		<a
			class="logo-item card-hover variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="https://www.patreon.com/LuinoTV"
		>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="64"
					height="64"
					viewBox="0 0 24 24"
				>
					<path
						class="fill-token"
						d="M 2 3 L 2 21 L 6 21 L 6 3 L 2 3 z M 15 3 C 11.141 3 8 6.141 8 10 C 8 13.859 11.141 17 15 17 C 18.859 17 22 13.859 22 10 C 22 6.141 18.859 3 15 3 z"
					></path>
				</svg>
			</span>
			<span>Patreon</span>
		</a>
	</div>

	<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

	<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4" in:slide>
		<a
			class="block card card-hover p-4 variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="https://maps.app.goo.gl/CqLEoTi44XjuE8Mn6"
		>
			<div class="card-header flex flex-col content-center">
				<svg
					height="128"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 256 256"
					enable-background="new 0 0 256 256"
					xml:space="preserve"
				>
					<path
						class="fill-token"
						d="M128,10c-47.8,0-86.5,39.6-86.5,88.5C41.5,147.3,128,246,128,246s86.5-98.7,86.5-147.5C214.5,49.6,175.8,10,128,10L128,10z M128,135.4c-23.9,0-43.3-19.8-43.3-44.3c0-24.4,19.4-44.3,43.3-44.3c23.9,0,43.3,19.8,43.3,44.3C171.3,115.5,151.9,135.4,128,135.4z"
					/>
				</svg>
				<h3 class="w-fill text-center h3">Uffici</h3>
			</div>
			<p class="p-4 w-fill text-center">Via Provinciale, 66, 21030 Mesenzana VA</p>
		</a>
		<a
			class="block card card-hover p-4 variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="mailto:luinotv@gmail.com"
		>
			<div class="card-header flex flex-col content-center">
				<svg
					height="128"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 256 256"
					enable-background="new 0 0 256 256"
					xml:space="preserve"
				>
					<path
						class="fill-token"
						d="M27.4,53c-5.7,1.1-12.1,5.9-14.7,11.1C9.9,69.4,10,66.9,10,128c0,36.3,0.2,57.2,0.5,58.6c1.3,5.6,6,11.7,10.9,14.2c5.7,2.8-0.9,2.7,106.6,2.7c86.9,0,98.8-0.1,101.4-0.7c7.9-2.1,13.9-8.1,16-15.9c0.5-1.9,0.7-13.3,0.7-58.9c0-61.1,0.1-58.5-2.7-63.9c-2.7-5.4-9-10-15.2-11.1C224.9,52.3,30.5,52.4,27.4,53z M212,67.3c-1,0.9-83.5,50.4-84,50.4S44.9,68.2,44.1,67.4c-0.3-0.2,36.2-0.4,83.9-0.4C174.4,66.9,212.2,67.1,212,67.3z M60.7,94.5c19.5,11.7,35.7,21.6,36.1,21.9c0.4,0.4-7,7.3-34.2,31.2c-19.2,16.8-35.6,31.3-36.4,32l-1.6,1.4v-53.8c0-29.9,0.2-53.9,0.4-53.9C25.1,73.2,41.3,82.8,60.7,94.5z M231.5,126.1c0,49.6,0,52.9-0.8,52.3c-5.1-4.1-70.4-62-70.4-62.3c0-0.6,69.6-42.8,70.6-42.8C231.4,73.2,231.5,84.1,231.5,126.1z M183.6,156.5l36.7,32.3l-45.6,0.1c-25.1,0-66.2,0-91.3,0l-45.8-0.1l36-31.7c19.8-17.4,36.2-31.8,36.6-32c0.3-0.2,3.4,1.3,8,4.1c10,5.9,9.4,6,19.9-0.4c4.4-2.7,8.2-4.8,8.3-4.7C146.8,124.1,163.5,138.6,183.6,156.5z"
					/>
				</svg>
				<h3 class="w-fill text-center h3">Email</h3>
			</div>
			<p class="p-4 w-fill text-center">luinotv@gmail.com</p>
		</a>
		<a
			class="block card card-hover p-4 variant-filled-surface hover:variant-filled-secondary"
			target="_blank"
			href="tel:+393510137159"
		>
			<div class="card-header flex flex-col content-center">
				<svg
					height="128"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 256 256"
					enable-background="new 0 0 256 256"
					xml:space="preserve"
				>
					<path
						class="fill-token"
						d="M50.2,18.5c-2.7,1.5-11.3,9.3-16.6,15.1C19.9,48.3,12,61.8,10.4,73.3c-0.8,5.6-0.3,9.4,2.1,16c11.7,31.9,28.2,58.1,51.4,81.8c25.8,26.3,57.5,46.6,93.3,59.7c14.4,5.3,24,7.6,31.9,7.6l5.6,0l4.1-2.1c4.9-2.5,12.6-7.6,17.6-11.6c8.6-7,20.2-19.4,26.6-28.4c3-4.2,3.6-6.5,2.6-9.4c-0.8-2.3-2-3.3-12.7-10c-5.3-3.4-16.3-10.5-24.3-15.8c-8-5.3-15.4-9.9-16.2-10.3c-2.2-0.9-4.7-0.8-7.1,0.2c-1.7,0.7-2.5,1.7-5.4,6.1c-8.9,13.7-15.8,22.2-19.1,23.5c-2.6,1-4.7,0.4-12.1-3.5c-26.7-14.1-48.9-33.8-70.3-62.6c-5.9-7.9-6.7-9.5-6.7-12.2c0-1.8,0.3-2.5,2.9-5.9C78.2,92,88,81.8,93.4,77.3c4.9-4.1,5-4.2,5.6-7.1c0.7-3,0.1-4.3-4.5-10.5C81,41.8,61.7,20.2,57.7,18.3C55.2,17.2,52.5,17.2,50.2,18.5z"
					/>
				</svg>
				<h3 class="w-fill text-center h3">Telefono</h3>
			</div>
			<p class="p-4 w-fill text-center">Dante Brancarisano: +39 351 013 7159</p>
		</a>
	</div>

	<h3 class="h3 text-center my-4">Oppure contattaci qui sotto</h3>

	<form method="POST" class="flex flex-col" in:slide>
		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
			<input
				type="text"
				placeholder="nome"
				name="name"
				class="input variant-form-material"
				required
			/>
			<input
				type="email"
				placeholder="email"
				name="email"
				class="input variant-form-material"
				required
			/>
			<input
				type="text"
				placeholder="oggetto"
				name="subject"
				class="input variant-form-material"
				required
			/>
		</div>
		<textarea
			name="message"
			cols="30"
			rows="10"
			placeholder="Scrivi qui il tuo messaggio"
			class="mt-4 textarea variant-form-material"
			required
		/>

		<input type="submit" value="Invia" class="btn variant-filled-secondary mt-4 cursor-pointer" />
	</form>
</main>
