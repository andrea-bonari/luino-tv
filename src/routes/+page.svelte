<script lang="ts">
	import type { PageData } from "./$types";
    import { slide, fade } from "svelte/transition";
    import logo from '$lib/images/logo.webp';

    export let data: PageData;

    let animate = false;

    const triggerAnim = () => {
        animate = true;
    };
</script>

<svelte:head>
    <title>LuinoTV</title>
	<meta name="description" content="La web TV dell'alto varesotto" />
	<meta name="keywords" content="luino, tv, luinotv, programmi, video, streaming, diretta, live" />

	<meta property="og:title" content="LuinoTV" />
	<meta property="og:description" content="La web TV dell'alto varesotto" />
	<meta property="og:image" content="https://luinotv.it/favicons/android-chrome-256x256.png" />
	<meta property="og:url" content="https://luinotv.it/" />
	<meta property="og:site_name" content="LuinoTV" />
	<meta property="og:locale" content="it_IT" />
	<meta property="og:type" content="website" />
	<meta property="og:author" content="LuinoTV" />
	<meta property="og:author:email" content="redazione@luinotv.it" />
	<meta property="og:author:website" content="https://luinotv.it/" />
	<meta property="og:author:url" content="https://luinotv.it/" />
	<meta property="og:author:role" content="Publisher" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LuinoTV" />
	<meta name="twitter:description" content="La web TV dell'alto varesotto" />
	<meta name="twitter:image" content="https://luinotv.it/favicons/android-chrome-256x256.png" />
	<meta name="twitter:image:alt" content="LuinoTV" />
	<meta name="twitter:site" content="@LuinoTv" />
	<meta name="twitter:creator" content="@LuinoTv" />
</svelte:head>

{#if animate}
	<div class="fixed inset-0 bg-black z-20" in:fade={{ duration: 200 }}></div>
{/if}

<main class="flex flex-col content-center items-center w-full">
    <img class="min-w-[15rem] w-[40%]" src={logo} alt="Immagine LuinoTV">

    <h4 class="h4 text-justify">Web TV dedicata all'Alto Varesotto. Produciamo programmi di informazione, intrattenimento e attualità in collaborazione con l'Accademia SG Academy.</h4>

    <a class="btn variant-filled-secondary w-min mt-5" href="/programmi/">Vai ai programmi</a>

    <hr class="h-px my-4 bg-gray-200 border-1 dark:bg-gray-700" />

    <h3 class="h3">Palinsesto</h3>

    <li class="list-dl w-full text-token card p-4 space-y-4">
        <div class="card">
            <span class="flex-auto">
                <dt class="font-bold">Dante Brancarisano</dt>
                <dd class="text-sm opacity-50">Direttore</dd>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto">
                <dt class="font-bold">Dario Lucini</dt>
                <dd class="text-sm opacity-50"></dd>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto">
                <dt class="font-bold">Fulvia Andreani</dt>
                <dd class="text-sm opacity-50"></dd>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto">
                <dt class="font-bold">Nicole Sansano</dt>
                <dd class="text-sm opacity-50"></dd>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto">
                <dt class="font-bold">Lidia Nardone</dt>
                <dd class="text-sm opacity-50"></dd>
            </span>
        </div>
        <div class="card">
            <span class="flex-auto">
                <dt class="font-bold">Emily Sommariva</dt>
                <dd class="text-sm opacity-50"></dd>
            </span>
        </div>
    </li>

    <h3 class="h3 my-4">I nostri servizi più recenti</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {#each data.videos as video, i}
            <a
            on:click={triggerAnim}
            in:slide|global={{ delay: 125 + 62 * i }}
            class="card text-center card-hover flex flex-col justify-between"
            href="https://youtube.com/watch?v={video.id}"
            >
                <header class="card-header">
                    <img src={video.thumbnail} alt={video.id} />
                </header>
                <section class="p-4">
                    <h2 class="h4">{video.title}</h2>
                    <p class="h6">{video.description}</p>
                </section>
            </a>
        {/each}
    </div>
</main>
