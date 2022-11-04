<div class="products_and_services">
	<div class="products_and_services_content">
		<h2>PRODUCTS AND SERVICES</h2>

		<p>
			At Statspro, we understand the need to convert training, testing and on-field data analysis
			into increased on field performance.
		</p>

		<p>
			For most teams, the coach does not have the luxury to bring in players from outside their
			group. The goal is thus to manage your players as best you can, and get their buy-in to train
			as hard as they can, without getting injured.
		</p>

		<p>
			Knowledge in the hands of the player leads to buy-in. They see that their on-field, and
			training effort contribute to their ranking, and that encourages them to train harder.
		</p>

		<p>
			We offer a wide range of services that all forms part of one product. This allows you to
			tailor your experience according to your budget.
		</p>

		<div class="analysis">
			<p>Our Basic service can either be team only or the full team - and player – event coding.</p>
			<div class="mini_section">
				<h3>Match Graphs</h3>
				<p>Match graphs are easy to interpret and well laid out.</p>
			</div>

			<div class="mini_section">
				<h3>Easy Access</h3>
				<p>
					Players and coaches have access to all their stats and clips on their phones or laptops
				</p>
			</div>
		</div>
	</div>

	<div class="sport_row">
		<div class="sport_images">
			<div class="image_1" />
			<div class="image_2" />
			<div class="image_3" />
			<div class="image_4" />
			<div class="image_5" />
		</div>
	</div>
</div>

<style lang="scss">
	.products_and_services {
		display: flex;
		flex: 1;
		flex-direction: column;

		height: 100%;

		.products_and_services_content {
			text-align: center;

			padding: 0% 25%;

			flex-direction: column;
			margin: auto;
			align-items: center;

			h2 {
				padding-bottom: 1em;
			}

			ul {
				list-style-position: inside;
				list-style-type: square;

				li {
					margin-top: 0.5em;

					a {
						color: #f2edea;
					}
				}
			}
		}

		.sport_row {
			display: flex;

			width: 100vw;

			background-image: url('Line.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-repeat: repeat-x;

			align-self: center;

			.sport_images {
				display: flex;
				flex-direction: row;

				margin: auto;

				align-items: center;

				.image_1 {
					background-image: url('Soccer.png');
					background-size: contain;
					background-position: center center;
					height: 200px;
					width: 141.39px;
				}
				.image_2 {
					background-image: url('Netball.png');
					background-size: contain;
					background-position: center center;
					height: 200px;
					width: 141.39px;
				}
				.image_3 {
					background-image: url('Rugby.png');
					background-size: contain;
					background-position: center center;
					height: 300px;
					width: 212.09px;
				}
				.image_4 {
					background-image: url('Hockey.png');
					background-size: contain;
					background-position: center center;
					height: 200px;
					width: 141.39px;
				}
				.image_5 {
					background-image: url('Waterpolo.png');
					background-size: contain;
					background-position: center center;
					height: 200px;
					width: 141.39px;
				}
			}
		}
	}
</style>
