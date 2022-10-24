<div class="contact_us">
	<div class="contact_us_content">
		<h2>ABOUT US</h2>

		<div class="landing_page_contact_us_content">
			<div class="landing_page_contact_us_single_spacer" />

			<div class="landing_page_contact_us_details">
				<div class="landing_page_contact_us_details_column">
					<div class="landing_page_contact_us_details_column_column">
						<ul>
							<li>Director</li>

							<li>Riaan Barnard</li>

							<li>riaan@statspro.co.za</li>

							<li>+27 72 256 5136</li>

							<li>Skype: Statspro1</li>
						</ul>
					</div>

					<div class="landing_page_contact_us_details_column_column">
						<div class="landing_page_contact_us_details_column_image_box">
							<img src="riaan_qr.svg" alt="" />
						</div>
					</div>
				</div>

				<div class="landing_page_contact_us_details_column">
					<div class="landing_page_contact_us_details_column_column">
						<ul>
							<li>Operations Manager</li>

							<li>Johan Potgieter</li>

							<li>pottie@statspro.co.za</li>

							<li>+27 61 900 2313</li>

							<li>Skype: Statspro1</li>
						</ul>
					</div>

					<div class="landing_page_contact_us_details_column_column">
						<div class="landing_page_contact_us_details_column_image_box">
							<img src="pottie_qr.svg" alt="" />
						</div>
					</div>
				</div>
			</div>

			<div class="landing_page_contact_us_single_spacer" />
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
	.contact_us {
		display: flex;
		flex: 1;
		flex-direction: column;

		height: 100%;

		.contact_us_content {
			text-align: center;

			width: 100;
			flex-direction: column;
			margin: auto;
			align-items: center;

			h2 {
				padding-bottom: 1em;
			}

			.landing_page_contact_us_content {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				text-align: center;

				.landing_page_contact_us_details {
					width: 100%;
					display: flex;
					flex-direction: row;

					.landing_page_contact_us_details_column {
						color: #f2edea;
						padding-top: 5vh;
						margin-left: auto;
						margin-right: auto;
						width: 50%;
						display: flex;
						flex-direction: row;
						align-items: center;

						.landing_page_contact_us_details_column_column {
							color: #f2edea;
							padding-bottom: 2vh;
							margin-left: auto;
							margin-right: auto;
							width: 100%;

							ul {
								list-style: none;
								text-align: center;
								padding: 0;
								margin: 0;

								li:first-child {
									font-size: 1.2rem;
									font-weight: bold;
								}
							}

							.landing_page_contact_us_details_column_image_box {
								width: 90%;
							}

                            .landing_page_contact_us_details_column_image_box img{
								width: 90%;
							}
						}
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
