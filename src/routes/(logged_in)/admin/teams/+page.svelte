<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ teams } = data);




    let sorted = data.teams.sort((a, b) =>  (a.club.name < b.club.name) ? -1 : 1);
	console.log(sorted);

</script>

<div class="content">
	<h3>teams</h3>

	{#each sorted as team}
		<p>
			{team.club.name} - {team.name}

		</p>
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
