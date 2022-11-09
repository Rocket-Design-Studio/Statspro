<script lang="ts">
import type { PageData } from './$types';

	export let data: PageData;

	$: ({ clubs } = data);
</script>

<div class="content">
	<h3>clubs</h3>

	{#each clubs as club}
		<p>{club.code} - {club.name}</p>
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