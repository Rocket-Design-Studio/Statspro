<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ trainingProgram } = data);


</script>

<div class="content">
	<h3>TrainingPrograms</h3>

	{#each trainingProgram as trainingProgram}
		<p>
			{trainingProgram.programName}

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
