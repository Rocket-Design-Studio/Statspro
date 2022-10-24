<script lang="ts">
    import './reset.scss';
    import './typography.scss';
    import './app.scss';
	import Header from '../lib/components/Header.svelte';

</script>

<svelte:head>
	<title>Statspro</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div class="main_body">
    <Header />
    <slot />
</div>
