<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ players } = data);
</script>

<div class="content">
	<h3>Sport</h3>

	{#each players as player}
		<p>{player.lastName}, {player.firstName} - {player.club.name}</p>
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