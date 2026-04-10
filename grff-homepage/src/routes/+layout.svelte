<script>
	import { page, navigating } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-[#05010d] text-white">
	<Navbar currentPath={$page.url.pathname} />

	{#if $navigating}
		<div class="flex min-h-[60vh] items-center justify-center">
			<LoadingSpinner size="lg" label="Loading page..." />
		</div>
	{:else}
		{@render children()}
	{/if}

	<Footer />
</div>
