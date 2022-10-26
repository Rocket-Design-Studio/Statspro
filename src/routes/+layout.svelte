<script lang="ts">
    import './reset.scss';
    import './typography.scss';
    import './app.scss';
	import Header from '../lib/components/Header.svelte';

</script>



<div class="main_body">
    <Header />
    <slot />
</div>
