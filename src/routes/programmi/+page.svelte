<script lang="ts">
    import { slide } from "svelte/transition";

    export let data;
</script>

<main class="flex flex-col content-center w-full">

    <h1 class="h1 text-center my-4">Programmi</h1>

    <div class="flex flex-col gap-4 items-center">
        {#each data.playlists as playlist, i}
            <div class="max-w-full md:max-w-sm w-full lg:max-w-full lg:flex rounded-lg variant-filled-surface border" in:slide|global={{ delay: 62 * i }}>
                <a href="./programmi/{playlist.id}">
                    <div class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden rounded-lg" style="background-image: url({playlist.thumbnail})"/>
                </a>
                <div class="w-full variant-filled-surface p-4 flex flex-col justify-between leading-normal rounded-lg">
                    <div class="mb-8">
                        <div class="font-bold text-xl mb-2">{playlist.title}</div>
                        <p class="text-base">{playlist.description}</p>
                    </div>
                    <a href="/programmi/{playlist.id}/" class="self-end w-min btn variant-filled-secondary card-hover">Guarda</a>
                </div>
            </div>
        {/each}
    </div>
    
</main>
