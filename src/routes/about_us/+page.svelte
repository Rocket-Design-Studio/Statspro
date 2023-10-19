<script lang="ts">
// Page script goes here

</script>

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
        margin-top: 1rem;

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
                flex-wrap: wrap;
			}
			.about_us_column {
                flex: 1;
                min-width: 400px;
				padding-left: 2vw;
				padding-right: 2vw;

                margin-left: auto;
                margin-right: auto;
			}

            .about_us_meet_the_team_image_box {
                padding-bottom: 2em;
                margin-top: 1rem;
            }

			.about_us_meet_the_team_image_box img {
				width: 10vw;
				height: 10vw;
                min-height: 150px;
                min-width: 150px;
				object-fit: cover;
				border: 2px #FC5200 solid;
				border-radius: 50%;
                margin: auto;
			}
		}

	}
</style>