<!-- generic contact page with address, phone number, email, links to social media and patreon -->
<script lang="ts">
    import { slide } from 'svelte/transition'
</script>

<svelte:head>
    <title>Contattaci</title>

    <meta name="description" content="Contatti di LuinoTV" />

    <meta property="og:title" content="Contattaci" />
    <meta property="og:description" content="Contatti di LuinoTV" />
    <meta property="og:image" content="https://luinotv.it/favicon.jpg" />
    <meta property="og:url" content="https://luinotv.it/contattaci" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@luinotv" />
    <meta name="twitter:title" content="Contattaci" />
    <meta name="twitter:description" content="Contatti di LuinoTV" />
    <meta name="twitter:image" content="https://luinotv.it/favicon.jpg" />
    <meta name="twitter:url" content="https://luinotv.it/contattaci" />

    <link rel="canonical" href="https://luinotv.it/contattaci" />
</svelte:head>

<main>
    <div class="boxcontainer" transition:slide>
        <div class="boxes">
            <div class="boxhead">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                    <path d="M128,10c-47.8,0-86.5,39.6-86.5,88.5C41.5,147.3,128,246,128,246s86.5-98.7,86.5-147.5C214.5,49.6,175.8,10,128,10L128,10z M128,135.4c-23.9,0-43.3-19.8-43.3-44.3c0-24.4,19.4-44.3,43.3-44.3c23.9,0,43.3,19.8,43.3,44.3C171.3,115.5,151.9,135.4,128,135.4z"/>
                </svg>
                <h3>Uffici</h3>
            </div>
            <div class="boxdesc">
                <p>Via Provinciale, 66, 21030 Mesenzana VA (<a target="_blank" href="https://maps.app.goo.gl/CqLEoTi44XjuE8Mn6">maps</a>)</p>
            </div>
        </div>
        <div class="boxes">
            <div class="boxhead">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                    <path d="M50.2,18.5c-2.7,1.5-11.3,9.3-16.6,15.1C19.9,48.3,12,61.8,10.4,73.3c-0.8,5.6-0.3,9.4,2.1,16c11.7,31.9,28.2,58.1,51.4,81.8c25.8,26.3,57.5,46.6,93.3,59.7c14.4,5.3,24,7.6,31.9,7.6l5.6,0l4.1-2.1c4.9-2.5,12.6-7.6,17.6-11.6c8.6-7,20.2-19.4,26.6-28.4c3-4.2,3.6-6.5,2.6-9.4c-0.8-2.3-2-3.3-12.7-10c-5.3-3.4-16.3-10.5-24.3-15.8c-8-5.3-15.4-9.9-16.2-10.3c-2.2-0.9-4.7-0.8-7.1,0.2c-1.7,0.7-2.5,1.7-5.4,6.1c-8.9,13.7-15.8,22.2-19.1,23.5c-2.6,1-4.7,0.4-12.1-3.5c-26.7-14.1-48.9-33.8-70.3-62.6c-5.9-7.9-6.7-9.5-6.7-12.2c0-1.8,0.3-2.5,2.9-5.9C78.2,92,88,81.8,93.4,77.3c4.9-4.1,5-4.2,5.6-7.1c0.7-3,0.1-4.3-4.5-10.5C81,41.8,61.7,20.2,57.7,18.3C55.2,17.2,52.5,17.2,50.2,18.5z"/>
                </svg>
                <h3>Telefono</h3>
            </div>
            <div class="boxdesc">
                <p>Dante Brancarisano: <a href="tel:+393510137159">+39 351 013 7159</a></p>
            </div>
        </div>
        <div class="boxes">
            <div class="boxhead">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                    <path d="M27.4,53c-5.7,1.1-12.1,5.9-14.7,11.1C9.9,69.4,10,66.9,10,128c0,36.3,0.2,57.2,0.5,58.6c1.3,5.6,6,11.7,10.9,14.2c5.7,2.8-0.9,2.7,106.6,2.7c86.9,0,98.8-0.1,101.4-0.7c7.9-2.1,13.9-8.1,16-15.9c0.5-1.9,0.7-13.3,0.7-58.9c0-61.1,0.1-58.5-2.7-63.9c-2.7-5.4-9-10-15.2-11.1C224.9,52.3,30.5,52.4,27.4,53z M212,67.3c-1,0.9-83.5,50.4-84,50.4S44.9,68.2,44.1,67.4c-0.3-0.2,36.2-0.4,83.9-0.4C174.4,66.9,212.2,67.1,212,67.3z M60.7,94.5c19.5,11.7,35.7,21.6,36.1,21.9c0.4,0.4-7,7.3-34.2,31.2c-19.2,16.8-35.6,31.3-36.4,32l-1.6,1.4v-53.8c0-29.9,0.2-53.9,0.4-53.9C25.1,73.2,41.3,82.8,60.7,94.5z M231.5,126.1c0,49.6,0,52.9-0.8,52.3c-5.1-4.1-70.4-62-70.4-62.3c0-0.6,69.6-42.8,70.6-42.8C231.4,73.2,231.5,84.1,231.5,126.1z M183.6,156.5l36.7,32.3l-45.6,0.1c-25.1,0-66.2,0-91.3,0l-45.8-0.1l36-31.7c19.8-17.4,36.2-31.8,36.6-32c0.3-0.2,3.4,1.3,8,4.1c10,5.9,9.4,6,19.9-0.4c4.4-2.7,8.2-4.8,8.3-4.7C146.8,124.1,163.5,138.6,183.6,156.5z"/>
                </svg>
                <h3>Email</h3>
            </div>
            <div class="boxdesc">
                <p><a href="mailto:redazione@luinotv.it">redazione@luinotv.it </a></p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .boxcontainer {
        display: flex;
        flex-direction: row;

        gap: 1em;
    }

    .boxes {
        border: 1px solid gray;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: var(--secondary);      
        border-radius: 1em;
        max-width: 10em;
        text-align: center;
    }

    .boxes svg {
        width: 5em;
        fill: var(--accent);
    }

    .boxdesc {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>