<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ coaches } = data);

	console.log(data);
</script>

<div class="content">
	<h3>Coaches</h3>

	{#each coaches as coach}
		<p>
			{coach.profile.lastName}, {coach.profile.firstName} -
			{#each coach.clubs as item}
				{item.name}
			{/each}
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
