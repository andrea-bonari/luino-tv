<script>
	import { LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	const openDrawer = () => {
		drawerStore.open();
	};
</script>

<div>
	<ul class="gap-2 items-center hidden md:flex">
		<li class="btn variant-filled-surface hover:variant-filled-secondary card-hover select-none">
			<a href="/">Home</a>
		</li>
		<li class="btn variant-filled-surface hover:variant-filled-secondary card-hover select-none">
			<a href="/programmi">Programmi</a>
		</li>
		<li class="btn variant-filled-surface hover:variant-filled-secondary card-hover select-none">
			<a href="/contatti">Contatti</a>
		</li>
		<LightSwitch />
	</ul>
	<button class="flex md:hidden fill-token" on:click={openDrawer}>
		<svg height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
			<path
				d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
			></path>
		</svg>
	</button>
</div>
