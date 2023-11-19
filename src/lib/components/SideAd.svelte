<script lang="ts">
    import type { Ad } from '$lib/types/ads';

    export let ads: Ad[];
</script>

<main class="flex gap-4 flex-col content-center justify-start p-3">
    {#each ads as ad}
        <a href={ad.href} >
        {#if ad.type == 'image'}
            <img src={ad.src} alt="Pubblicità">
        {:else}
            <video width="250" height="250" autoplay muted>
                <source src={ad.src} type="video/mp4">
            </video>
        {/if}
        </a>
    {/each}
</main>
