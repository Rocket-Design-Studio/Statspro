<script lang="ts">
    import '../scss/reset.scss';
    import '../scss/typography.scss';
    import '../scss/app.scss';
	import Header from '../../lib/components/Header/Header.svelte';
    import Footer from '../../lib/components/Footer/Footer.svelte';

</script>



<div class="main_body">
    <Header />
        <slot />
    <Footer />
</div>

<style lang="scss">
    .main_body {
        
        display: flex;
        flex-direction: column;

    }
</style>