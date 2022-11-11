<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let element = [];

	//Clubs
	const clubRugby = data.clubs.filter((obj) => {
		return obj.sports.some((element: any) => element.name === 'Rugby');
	});
	let amountClubRugby = Object.keys(clubRugby).length;

	const clubCricket = data.clubs.filter((obj) => {
		return obj.sports.some((element: any) => element.name === 'Cricket');
	});
	let amountClubCricket = Object.keys(clubCricket).length;

	const clubNetball = data.clubs.filter((obj) => {
		return obj.sports.some((element: any) => element.name === 'Netball');
	});
	let amountClubNetball = Object.keys(clubNetball).length;

	const clubHockey = data.clubs.filter((obj) => {
		return obj.sports.some((element: any) => element.name === 'Hockey');
	});
	let amountClubHockey = Object.keys(clubHockey).length;

	const clubSoccer = data.clubs.filter((obj) => {
		return obj.sports.some((element: any) => element.name === 'Soccer');
	});
	let amountClubSoccer = Object.keys(clubSoccer).length;

	//Teams
	const teamsRugby = data.teams.filter((obj) => {
		return obj.sport.name === 'Rugby';
	});
	let amountTeamsRugby = Object.keys(teamsRugby).length;

	const teamsCricket = data.teams.filter((obj) => {
		return obj.sport.name === 'Cricket';
	});
	let amountTeamsCricket = Object.keys(teamsCricket).length;

	const teamsNetball = data.teams.filter((obj) => {
		return obj.sport.name === 'Netball';
	});
	let amountTeamsNetball = Object.keys(teamsNetball).length;

	const teamsHockey = data.teams.filter((obj) => {
		return obj.sport.name === 'Hockey';
	});
	let amountTeamsHockey = Object.keys(teamsHockey).length;

	const teamsSoccer = data.teams.filter((obj) => {
		return obj.sport.name === 'Soccer';
	});
	let amountTeamsSoccer = Object.keys(teamsSoccer).length;

	//Players
	const playersRugby = data.players.filter((obj) => {
		return obj.sport.name === 'Rugby';
	});
	let amountPlayersRugby = Object.keys(playersRugby).length;

	const playersCricket = data.players.filter((obj) => {
		return obj.sport.name === 'Cricket';
	});
	let amountPlayersCricket = Object.keys(playersCricket).length;

	const playersNetball = data.players.filter((obj) => {
		return obj.sport.name === 'Netball';
	});
	let amountPlayersNetball = Object.keys(playersNetball).length;

	const playersHockey = data.players.filter((obj) => {
		return obj.sport.name === 'Hockey';
	});
	let amountPlayersHockey = Object.keys(playersHockey).length;

	const playersSoccer = data.players.filter((obj) => {
		return obj.sport.name === 'Soccer';
	});
	let amountPlayersSoccer = Object.keys(playersSoccer).length;

	let isClubs = true;
	let isTeams = true;
	let isPlayers = true;
</script>

<div class="admindashboard">
	<div class="toggel">
		<button on:click={() => (isClubs = !isClubs)}>Toggle Clubs</button>
		<button on:click={() => (isTeams = !isTeams)}>Toggle Teams</button>
		<button on:click={() => (isPlayers = !isPlayers)}>Toggle Players</button>
	</div>

	<div class="container grid md:grid-4 md:grid-rows-4 gap-6">
		{#if isClubs}
			<div class="clubs cell-1 md:cell-2 box flat">
				<h2>Clubs</h2>
				<div class="sport ">
					<div>
						<h2>Rugby</h2>
						<p>{amountClubRugby}</p>
					</div>
					<div>
						<h2>Cricket</h2>
						<p>{amountClubCricket}</p>
					</div>
					<div>
						<h2>Netball</h2>
						<p>{amountClubNetball}</p>
					</div>
					<div>
						<h2>Hockey</h2>
						<p>{amountClubHockey}</p>
					</div>
					<div>
						<h2>Soccer</h2>
						<p>{amountClubSoccer}</p>
					</div>
				</div>
			</div>
		{/if}

		{#if isTeams}
			<div class="teams cell-1 md:cell-2 box flat">
				<h2>Teams</h2>
				<div class="sport">
					<div>
						<h2>Rugby</h2>
						<p>{amountTeamsRugby}</p>
					</div>
					<div>
						<h2>Cricket</h2>
						<p>{amountTeamsCricket}</p>
					</div>
					<div>
						<h2>Netball</h2>
						<p>{amountTeamsNetball}</p>
					</div>
					<div>
						<h2>Hockey</h2>
						<p>{amountTeamsHockey}</p>
					</div>
					<div>
						<h2>Soccer</h2>
						<p>{amountTeamsSoccer}</p>
					</div>
				</div>
			</div>
		{/if}

		{#if isPlayers}
			<div class="players cell-2 md:cell-2 box flat ">
				<h2>Players</h2>
				<div class="sport">
					<div>
						<h2>Rugby</h2>
						<p>{amountPlayersRugby}</p>
					</div>
					<div>
						<h2>Cricket</h2>
						<p>{amountPlayersCricket}</p>
					</div>
					<div>
						<h2>Netball</h2>
						<p>{amountPlayersNetball}</p>
					</div>
					<div>
						<h2>Hockey</h2>
						<p>{amountPlayersHockey}</p>
					</div>
					<div>
						<h2>Soccer</h2>
						<p>{amountPlayersSoccer}</p>
					</div>
				</div>
			</div>
		{/if}

	</div>
</div>

<style lang="scss">
	
	.admindashboard {
		flex: 1;

		display: flex;
		flex-direction: column;

		height: 100vh;
		width: 100%;

		.toggel {
			display: flex;
			flex-direction: row;

			width: 100%;
			padding: 5px;

			justify-content: flex-end;
			align-items: center;
			align-content: center;
			align-self: flex-end;

			background: rgba(0, 0, 0, 0.6);

			button {
				padding-left: 1rem;
			}

			button:hover {
				color: #fc5200;
			}
		}

		.container {
			flex: 1;

			display: grid;

			margin: auto;
		}

		.clubs,
		.teams,
		.players {
			background: rgba(0, 0, 0, 0.6);

			margin: 2em;
			padding: 1em;
			border: 2px solid #fc5200;
			border-radius: 20px;

			text-align: center;

			display: flex;
			flex-direction: column;

			h2 {
				font-size: 150%;
				font-weight: 800;
				color: white;
			}

			.sport {
				display: flex;
				flex-direction: row;

				width: 100%;

				flex-grow: 1;

				div {
					flex: 1;

					h2 {
						font-size: 120%;
						color: #fc5200;
					}

					p {
						font-size: 80%;
					}
				}
			}
		}
	}

	.box {
		position: relative;
		padding: 13px;
	}

	.flat {
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
	}

	@media screen and (min-width: 640px), print {
		.sm\:grid-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media screen and (min-width: 768px), print {
		.md\:grid-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.md\:grid-3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.md\:grid-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.md\:grid-rows-3 {
			grid-template-rows: repeat(3, minmax(0, 1fr));
		}
	}

	[class^='cell'],
	[class*=':cell'] {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
	}

	.cell-1 {
		grid-column: span 1 / span 1;
	}

	.cell-row-2 {
		grid-row: span 2 / span 2;
	}
	@media screen and (min-width: 768px), print {
		.md\:cell-1 {
			grid-column: span 1 / span 1;
		}

		.md\:cell-2 {
			grid-column: span 2 / span 2;
		}
	}

	.gap-6,
	.gap-6 [class^='grid'] {
		gap: 1.5rem;
	}

	.gap-10,
	.gap-10 [class^='grid'] {
		gap: 2.5rem;
	}

	.hidden {
		display: none !important;
	}
</style>
