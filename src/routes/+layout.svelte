<script lang="ts">
	// Page script goes here
    import '../lib/scss/main.scss'

	import Footer from '$lib/components/footer/footer.svelte';
	import Header from '$lib/components/header/header.svelte';
</script>

<svelte:head>
	<title>Statspro</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<Header />
<div class="body">
	<slot />
</div>
<Footer />
