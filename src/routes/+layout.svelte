<script lang="ts">
	/** eslint-disable no-irregular-whitespace */
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';

	onMount(() => {
		if (import.meta.env.DEV) {
			(document.querySelector('.unverified') as HTMLElement).style.display = 'none';
		}
	})

	console.log('Sito web di:')
	console.log(`
	                 _                  ____                         _ 
     /\\             | |                |  _ \\                       (_)
    /  \\   _ __   __| |_ __ ___  __ _  | |_) | ___  _ __   __ _ _ __ _ 
   / /\\ \\ | '_ \\ / _\` | '__/ _ \\/ _\` | |  _ < / _ \\| '_ \\ / _\` | '__| |
  / ____ \\| | | | (_| | | |  __/ (_| | | |_) | (_) | | | | (_| | |  | |
 /_/    \\_\\_| |_|\\__,_|_|  \\___|\\__,_| |____/ \\___/|_| |_|\\__,_|_|  |_|`)
	console.log('Dato che sei qua perché non dai un occhiata al mio gh? https://github.com/andrea-bonari')
	console.log('--------------------------------------------------')
</script>

<svelte:head>
	<!-- main seo tags -->
	<title>Luino TV</title>
	<meta name="description" content="La web TV dell'Alto Varesotto">
	<meta name="keywords" content="Luino TV,Luino,luino,tv">
	<meta name="author" content="Luino TV">
	<meta name="robots" content="index, follow">
	<meta name="revisit-after" content="1 days">
	<meta name="language" content="IT">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- open graph tags -->
	<meta property="og:title" content="Luino TV">
	<meta property="og:description" content="La web TV dell'Alto Varesotto">
	<meta property="og:image" content="https://luinotv.it/logo.png">
	<meta property="og:url" content="https://luinotv.it">
	<meta property="og:site_name" content="Luino TV">
	<meta property="og:type" content="website">

	<!-- twitter card tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="Luino TV">
	<meta name="twitter:description" content="La web TV dell'Alto Varesotto">
	<meta name="twitter:image" content="https://luinotv.it/logo.png">
	<meta name="twitter:url" content="https://luinotv.it">
	<meta name="twitter:site" content="@luinotv">

	<!-- favicons -->
	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
	<link rel="manifest" href="/favicons/site.webmanifest">
	<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="/favicons/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="/favicons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

	<!-- google analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-5ZQZQZQZQZ"></script>
	<script>
		// todo: replace with your own tracking id
	</script>
</svelte:head>

<div class="app">
	<Header />

	<main>
		<div class="adslot">
			<div class="examplead">
				<h1>Annuncio</h1>
				<p>Questo è un esempio di annuncio</p>
			</div>
			<div class="examplead">
				<h1>Annuncio</h1>
				<p>Questo è un esempio di annuncio</p>
			</div>
			<div class="examplead">
				<h1>Annuncio</h1>
				<p>Questo è un esempio di annuncio</p>
			</div>
		</div>
		<div class="container">
			<slot />

		</div>
		<div class="adslot">
			<div class="examplead">
				<h1>Annuncio</h1>
				<p>Questo è un esempio di annuncio</p>
			</div>
			<div class="examplead">
				<h1>Annuncio</h1>
				<p>Questo è un esempio di annuncio</p>
			</div>
			<div class="examplead">
				<h1>Annuncio</h1>
				<p>Questo è un esempio di annuncio</p>
			</div>
		</div>
	</main>

	<footer>
		<p>La web TV dell'Alto Varesotto</p>
		<h6>Sito web prodotto da <a href="https://svasso-spensierato.web.app/">Andrea Bonari</a></h6>
	</footer>
</div>

<div class="unverified">
	Stai visualizzando una versione non verificata del sito web.
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: row;
		padding: 0 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-width: 65%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.adslot {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.examplead {
		display: flex;
		flex-direction: column;
		margin-top: 1em;
		box-sizing: border-box;
		background-color: #f00;
		aspect-ratio: 1;
		text-align: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	.unverified {
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

	footer h6 {
		margin: 0;
		font-weight: normal;
	}
</style>
