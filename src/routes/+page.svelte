<div class="body_home">
<div class="sport_images">
	<div class="image_1"></div>
	<div class="image_2"></div>
	<div class="image_3"></div>
	<div class="image_4"></div>
	<div class="image_5"></div>
</div>
</div>

<style lang="scss">
	.body_home {
		flex: 1;

		display: flex;
		flex-direction: column;

		.sport_images {

			display: flex;
			flex-direction: row;

			margin: auto;
			padding-top: 200px;

			align-items: center;

			.image_1 {
				background-image: url('Soccer.png');
				background-size: contain;
				background-position: center center;
				height: 400px;
				width: 282.78px;
			}
			.image_2 {
				background-image: url('Netball.png');
				background-size: contain;
				background-position: center center;
				height: 400px;
				width: 282.78px;
			}
			.image_3 {
				background-image: url('Rugby.png');
				background-size: contain;
				background-position: center center;
				height: 600px;
				width: 424.17px;
			}
			.image_4 {
				background-image: url('Hockey.png');
				background-size: contain;
				background-position: center center;
				height: 400px;
				width: 282.78px;
			}
			.image_5 {
				background-image: url('Waterpolo.png');
				background-size: contain;
				background-position: center center;
				height: 400px;
				width: 282.78px;
			}
		}
	}
</style>
