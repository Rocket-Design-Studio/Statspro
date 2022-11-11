<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;


	$: ({ sport } = data);

	data.sport.sort((a, b) =>  (a.name < b.name) ? -1 : 1);

	export let dataSet = {
		id:null,
		name:""
	}

	const addSport = (e) => {
		e.preventDefault()
		const newSport = {
			name: dataSet.name
		}

		sport = sport.concat(newSport);

		dataSet = {
			name:"",
			id:null
		};

	}

</script>

<div class="content">
	<div class="column">
		<h2>Sport</h2>

	{#each sport as sport}
		<p>{sport.name}</p>
	{/each}
	</div>
	<div class="column">
		<div class="add_sport">
			<h2>Add Sport</h2>
			<form>
				<label for="">Sport Name</label>
				<input bind:value={dataSet.name} type="text" placeholder="Enter Sport Name" required/>
				<button on:click={addSport}>Add Sport</button>
			</form>
		</div>
	</div>
	


	
</div>

<style lang="scss">
	.content {
        flex: 1;

		display: flex;
		flex-direction: row;

		justify-content: center;
		align-items: center;

		width: 100%;

        text-align: center;

		.column {
			flex :1;

			h2  {
				font-size: 180%;
				font-weight: 800;
				text-decoration: underline;
			}
		}


	}
</style>