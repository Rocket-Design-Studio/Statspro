<div class="products_and_services">
	<div class="products_and_services_content">
		<h2>PRODUCTS AND SERVICES</h2>

		<p>
			As market leaders in school and club rugby analysis we understand that the turnaround time,
			the quality of our service and the amount of data that we can get from a game, have helped us
			grow to the international service provider that we are today. In 2018 we will have clients
			from Rustenburg to Durban, from Nelspruit to Cape Town. We offer an end to end service that
			includes:
		</p>

		<br />

		<ul>
			<li>
				Filming of rugby matches - A video file of the match is available 10 min after the match.
			</li>

			<li>
				Coding of matches - One of our unique selling points is that we offer to both film and code
				your school and club games. With our team of coders we make sure that your games are coded
				accurately and on time.
			</li>

			<li>
				Licensing of our rugby analysis software - If you prefer to do the coding yourself you are
				welcome to purchase an annual licence to use our software. The use of our software is free
				if we code the games for you.
			</li>

			<li>Data provision - We provide data for sports consumers.</li>

			<li>
				<a href="Visual_Cv.html" class="product_anchor"> Player Visual CV's</a>
				- Let us create your visual CV to help launch your professional playing career.
			</li>
		</ul>

		<br />
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
