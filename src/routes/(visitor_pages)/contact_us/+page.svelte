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

<style lang="scss">
	.contact_us_content {
		text-align: center;

		width: 100;
		flex-direction: column;
		margin: auto;
		align-items: center;

		padding-top: 5vh;

		h2 {
			padding-bottom: 1vh;

			font-size: 150%;
			line-height: 100%;
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

						.landing_page_contact_us_details_column_image_box img {
							width: 90%;
						}
					}
				}
			}



			@media (max-width: 1024px) {
				
				.landing_page_contact_us_details {
					flex-direction: column;

					.landing_page_contact_us_details_column {
						flex-direction: column;

						width: 90%;

						margin: auto;
					}

					.landing_page_contact_us_details_column_image_box {
						width: 60% !important;

						margin: auto;

						img {
							width: 100% !important;
						}
					}
				}
			}
		}
	}
</style>
