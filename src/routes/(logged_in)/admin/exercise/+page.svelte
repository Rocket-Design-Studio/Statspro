<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ exercise } = data);


</script>

<div class="content">
	<h3>Exercise</h3>

	{#each exercise as exercise}
		<p>
			{exercise.workout} - {exercise.type}

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
