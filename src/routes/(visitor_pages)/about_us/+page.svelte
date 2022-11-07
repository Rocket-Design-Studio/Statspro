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

<style lang="scss">

		.about_us_content {
			text-align: center;

			width: 100;
			flex-direction: column;

			align-items: center;

			padding-top: 5vh;

			h2 {
				padding-bottom: 1em;

				font-size: 150%;
				line-height: 100%;
			}

			

			.about_us_row {
				display: flex;
				flex-direction: row;

				align-items: flex-start;
			}




			.about_us_column {
				width: 33.3%;
				padding-left: 2vw;
				padding-right: 2vw;

                width: 100%;

				h3 {
					font-size: 120%;
					font-weight: bold;
				}

			}

            .about_us_meet_the_team_image_box {
                margin-bottom: 2em;
            }

			.about_us_meet_the_team_image_box img {
				width: 15vw;
				height: 15vw;
				object-fit: cover;
				border: 2px #FC5200 solid;
				border-radius: 50%;
                margin: auto;
			}

			@media (max-width: 640px) {
				.about_us_row {
				flex-direction: column;
				}

				.about_us_meet_the_team_image_box {
					margin-top: 2em;
                margin-bottom: 2em;
            }

				.about_us_meet_the_team_image_box img {
				width: 60vw !important;
				height: 60vw !important;
				object-fit: cover;
				border: 2px #FC5200 solid;
				border-radius: 50%;
                margin: auto;
				
			}


			}

			@media (max-width: 768px) {
				.about_us_row {
					flex-direction: column;
				}

				.about_us_meet_the_team_image_box {
					margin-top: 2em;
                margin-bottom: 2em;
            }

				.about_us_meet_the_team_image_box img {
				width: 50vw !important;
				height: 50vw !important;
				object-fit: cover;
				border: 2px #FC5200 solid;
				border-radius: 50%;
                margin: auto;
				
			}
			}

			@media (max-width: 1024px) {
				
				.about_us_row {
					flex-direction: column;
				}

				.about_us_meet_the_team_image_box {
					margin-top: 2em;
                margin-bottom: 2em;
            }

				.about_us_meet_the_team_image_box img {
				width: 40vw;
				height: 40vw;
				object-fit: cover;
				border: 2px #FC5200 solid;
				border-radius: 50%;
                margin: auto;
				
			}
			}
		}

</style>
