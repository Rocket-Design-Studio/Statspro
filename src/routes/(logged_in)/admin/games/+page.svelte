<script lang="ts">
	import { paginate, LightPaginationNav } from 'svelte-paginate';

	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ games } = data);

	let items = data.games;

	let amount = Object.keys(data.games).length;
	console.log(amount);

	let currentPage = 1;
	let pageSize = 8;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<div class="content">
	<div class="games">
		<h3>Matches</h3>

		<div class="game">
			{#each paginatedItems as game, i}
				<div class="match">
					<table>
						<tr>
							<td class="endCell">{game.forTeam.name}</td>
							<td class="midCell">VS</td>
							<td class="endCell">{game.againstTeam.name}</td>
						</tr>
					</table>
					<p>{game.kickOffTime}</p>
				</div>
			{/each}
		</div>
	</div>

	<LightPaginationNav
		totalItems={Object.keys(data.games).length}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
</div>

<style lang="scss">
	.content {
		flex: 1;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		height: 100vh;

		text-align: center;

		.games {
			flex: 1;

			display: flex;
			flex-direction: column;

			h3 {
				font-size: 150%;
				padding: 1rem;
				font-weight: 800;
			}

			padding-bottom: 2rem;

			.game {
				flex: 1;

				display: flex;
				flex-direction: column;

				align-items: center;
				justify-content: space-between;

				.match {
					width: 60%;

					border: #fc5200 1px solid;
					background: rgba(0,0,0,0.6);
					border-radius: 10px;

					padding: 0.5em;

					table {
						width: 100%;
						tr {
							width: 60%;

							td {
								width: 20%;
							}
						}
					}

					.endCell {
						color: #fc5200;
						font-size: 120%;
					}

					.midCell {
						font-size: 200%;
					}
				}
			}
		}
	}
</style>
