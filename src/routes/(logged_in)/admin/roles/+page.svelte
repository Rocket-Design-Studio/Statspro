<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ roles } = data);
</script>

<div class="content">
	<h3>Roles</h3>

	{#each roles as role}
		<p>{role.name}</p>
	{/each}
</div>

<style lang="scss">
	.content {

        flex: 1;

        text-align: center;

        h3 {
            font-size: 150%;
        }
	}
</style>