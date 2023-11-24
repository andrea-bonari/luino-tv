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

{#if animate}
	<div class="fixed inset-0 bg-black z-20" in:fade={{ duration: 200 }}></div>
{/if}

<main class="flex flex-col content-center items-center w-full">
    <img class="min-w-[15rem] w-[40%]" src={logo} alt="Immagine LuinoTV">

    <h4 class="h4 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi commodi labore voluptatem, iste dolorem expedita quasi, facere rerum velit, eligendi officiis voluptas sed blanditiis fuga minima qui asperiores atque officia?
    Dolores facere asperiores quos assumenda culpa hic modi id placeat cum, provident nobis debitis quibusdam. Esse provident exercitationem ab perferendis nam facere, cumque asperiores delectus at. Quia ducimus reprehenderit perspiciatis.</h4>

    <a class="btn variant-filled-secondary w-min" href="/programmi/">Vai ai programmi</a>

    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

    <h3 class="h3">I nostri servizi più recenti</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
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
