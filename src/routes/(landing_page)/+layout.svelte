<script lang="ts">
    import '$scss/app.scss';
    import '$scss/main.scss';
    import '$scss/reset.scss';
    import '$scss/typography.scss';

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

    @font-face {
        font-family: "Myriad Pro";
        font-style: normal;
        font-weight: 500;
        src: url('../../lib/components/Fonts/MYRIADPRO.woff');
        src: local(''), url('../../lib/components/Fonts/MYRIADPRO.woff') format('woff');
    }


    .main_body {
        height: 100vh;

        display: flex;

        overflow: hidden;
    }
</style>