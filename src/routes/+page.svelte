<script lang="ts">
	import type { PageData } from "./$types";
    import { slide, fade } from "svelte/transition";

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
