<script lang="ts">
    import '../scss/reset.scss';
    import '../scss/typography.scss';
    import '../scss/app.scss';
	import Header from '../../lib/components/Header/Header.svelte';

</script>



<div class="main_body">
    <Header />
    <slot />
</div>

<style lang="scss">

    @font-face {
        font-family: "Brush Script MT";
        font-style: normal;
        font-weight: 500;
        src: url('../../lib/components/Fonts/BRUSHSCI.TTF');
        src: local(''), url('../../lib/components/Fonts/BRUSHSCI.TTF') format('woff');
    }


    .main_body {
        height: 100vh;

        display: flex;

        overflow: hidden;
    }
</style>