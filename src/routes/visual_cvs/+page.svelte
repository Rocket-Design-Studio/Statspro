<div class="visual_cvs">
	<div class="visual_cvs_content">
		<h2 >VISUAL CV's</h2>

        <div class="promo_video">
            <iframe src="https://player.vimeo.com/video/451497940" width="1000px" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe></div>
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

	.visual_cvs {
		display: flex;
		flex: 1;
		flex-direction: column;

		height: 100%;

		.visual_cvs_content {
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