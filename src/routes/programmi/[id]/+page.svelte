<script lang="ts">
	import { beforeNavigate } from "$app/navigation";
    import type { PageData } from "./$types";
    import { fade, scale, slide } from "svelte/transition";

    export let data : PageData;

    let animate = false;

    const triggerAnim = () => {
        animate = true;
    }
</script>

<svelte:head>
    <title>LuinoTV - {data.title}</title>
    <meta name="description" content={data.description}/>
    <meta name="keywords" content="luino, tv, luinotv, programmi, video, streaming, diretta, live"/>

    <meta property="og:title" content="LuinoTV - {data.title}"/>
    <meta property="og:description" content={data.description}/>
    <meta property="og:image" content={data.thumbnail}/>
    <meta property="og:url" content="https://luinotv.it/programmi/{data.id}"/>
    <meta property="og:site_name" content="LuinoTV"/>
    <meta property="og:locale" content="it_IT"/>
    <meta property="og:type" content="website"/>
    <meta property="og:author" content="LuinoTV"/>
    <meta property="og:author:email" content="redazione@luinotv.it"/>
    <meta property="og:author:website" content="https://luinotv.it/"/>
    <meta property="og:author:url" content="https://luinotv.it/"/>
    <meta property="og:author:role" content="Publisher"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="LuinoTV - {data.title}"/>
    <meta name="twitter:description" content={data.description}/>
    <meta name="twitter:image" content={data.thumbnail}/>
    <meta name="twitter:image:alt" content="LuinoTV"/>
    <meta name="twitter:site" content="@LuinoTv"/>
    <meta name="twitter:creator" content="@LuinoTv"/>
</svelte:head>

{#if animate}
    <div class="fixed inset-0 bg-black z-20" in:fade={{ duration: 400 }}></div>
{/if}

<main class="flex flex-col w-full">
    <div in:scale id="img" class="
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
        " style:background-image={`url(${data.thumbnail})`}>
        <div class="flex flex-col variant-filled-primary p-4 rounded-2xl text-[rgba(var(--theme-font-color-dark))]">
            <h1 class="h1">{data.title}</h1>
            <h4 class="h4 mt-2">{data.videos.length} Episodi</h4>
            <p class="mt-4 text-[rgba(var(--theme-font-color-dark))] blockquote drop-shadow-2xl">{data.description}</p>
            <a on:click={triggerAnim} class="btn card-hover variant-filled-secondary w-min self-end mt-4" href="https://youtube.com/watch?v={data.videos[0].id}&list={data.id}&index=1">Riproduci</a>
        </div>
    </div>

    <h3 class="mt-4 h3 text-center" in:fade={{ delay: 125 }}>Episodi</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        {#each data.videos as video, i}
            <a on:click={triggerAnim} in:slide|global={{delay: 125 + 62 * i}} class="card text-center card-hover flex flex-col justify-between" href="https://youtube.com/watch?v={video.id}&list={data.id}&index={i+1}">
                <header class="card-header">
                    <img src={video.thumbnail} alt={video.id}>
                </header>
                <section class="p-4">
                    <h2 class="h4">{video.title}</h2>
                    <p class="h6">{video.description}</p>
                </section>
                <footer class="card-footer">Episodio {i + 1}</footer>
            </a>
        {/each}
    </div>
</main>

<style>
</style>