<script>
	import { page } from '$app/stores';
	import banner from '$lib/images/banner.png';
	import facebook from '$lib/images/facebook.png';
	import instagram from '$lib/images/instagram.png';
	import youtube from '$lib/images/youtube.png';
	import tiktok from '$lib/images/tiktok.png';
</script>

<header>
	<div class="corner">
		<a href="https://luinotv.it">
			<img src={banner} alt="LuinoTV" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/programmi' ? 'page' : undefined}>
				<a href="/programmi">Programmi</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contattaci') ? 'page' : undefined}>
				<a href="/contattaci">Contattaci</a>
			</li>
			
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner icons">
		<a href="https://www.youtube.com/@LuinoTv">
			<img src={youtube} alt="YouTube" />
		</a>
		<a href="https://www.facebook.com/luinotv">
			<img src={facebook} alt="Facebook" />
		</a>
		<a href="https://www.instagram.com/luinotv/">
			<img src={instagram} alt="Instagram" />
		</a>
		<a href="https://www.tiktok.com/@luinotv">
			<img src={tiktok} alt="TikTok" />
		</a>

	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		padding: 1em;
		height: 4em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		height: 4em;
		object-fit: contain;
	}

	.corner.icons {
		display: flex;
		justify-content: flex-end;
		gap: 1em;
		height: 1em;
	}

	.corner.icons img {
		height: 2em;
		object-fit: contain;
	}

	nav {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		display: flex;
		justify-content: center;
		--background: var(--primary);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent);
	}
</style>
