<script lang="ts">
	import './scss/admin.scss';

	import Sidebar from './components/Sidebar.svelte';
</script>

<div class="admin">
	<Sidebar />
	<slot />
</div>

<style lang="scss">
    .admin {
        display: flex;
        flex-direction: row;

        width: 100vw;

        align-items: stretch;

    }
</style>
