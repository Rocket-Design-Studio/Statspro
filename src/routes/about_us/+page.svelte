<div class="about_us">
	<div class="about_us_content">
		<h2>ABOUT US</h2>

		<div class="about_us_row">
			<div class="about_us_column">
				<div class="about_us_meet_the_team_image_box">
					<img src="RiaanBarnard.jpg" alt="" />
				</div>

				<h3>Riaan Barnard</h3>

				<p>
					Founder and director of Statspro, Riaan lives in Cape Town with his family. He has coached
					rugby at school &amp; club levels and has also completed a coaching stint in Japan. Riaan
					makes the most of the scenic beauty of the Cape by running and cycling in his free time.
				</p>
			</div>

			<div class="about_us_column">
				<div class="about_us_meet_the_team_image_box">
					<img src="Pottie_foto.jpeg" alt="" />
				</div>

				<h3>Johan "Pottie" Potgieter</h3>

				<p>
					Pottie has worked himself up in the business, starting as a part time employee and now
					finds himself as the operations manager of Statspro. Since giving up a career as a civil
					engineer, Pottie is adding massive value to the business. He is based in Johannesburg
				</p>
			</div>
			<div class="about_us_column">
				<div class="about_us_meet_the_team_image_box">
					<img src="Shaun_foto.jpeg" alt="" />
				</div>

				<h3>Shaun Lewis</h3>

				<p>
					Shaun joined our staff fresh out of ETA as a fulltime rugby coder and analyst. His
					positive attitude and good work ethic has made him a valuable member of the team.
				</p>
			</div>
			<div class="about_us_column">
				<div class="about_us_meet_the_team_image_box">
					<img src="AdriBrand.jpg" alt="" />
				</div>

				<h3>Adrie Brand</h3>

				<p>
					Adrie work's in the Cape Town office and heads up the player's Visual CV department. He is
					an avid playstation gamer and enjoys fixing cars in his down time.
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
	.about_us {
		display: flex;
		flex: 1;
		flex-direction: column;

		height: 100%;

		.about_us_content {
			text-align: center;

			width: 100;
			flex-direction: column;
			margin: auto;
			align-items: center;

			h2 {
				padding-bottom: 1em;
			}

			.about_us_row,
			.partner_row {
				display: flex;
				flex-direction: row;

				align-items: flex-start;
			}
			.about_us_column {
				width: 33.3%;
				padding-left: 2vw;
				padding-right: 2vw;

                width: 100%;

                margin-left: auto;
                margin-right: auto;
			}

            .about_us_meet_the_team_image_box {
                padding-bottom: 2em;
            }

			.about_us_meet_the_team_image_box img {
				width: 10vw;
				height: 10vw;
				object-fit: cover;
				border: 2px #FC5200 solid;
				border-radius: 50%;
                margin: auto;
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
