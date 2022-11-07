<div class="body_home">
	<div class="title">
		<h1><span>S</span>tatspro</h1>
		<h2>Prepare to win</h2>
	</div>
	<div class="sport_images">
		<div class="image_1" />
		<div class="image_2" />
		<div class="image_3" />
		<div class="image_4" />
		<div class="image_5" />
	</div>
</div>

<style lang="scss">
	.body_home {
		flex: 1;

		display: flex;
		flex-direction: column;

		display: flex;

		.title {
			flex: 1;

			text-align: center;
			display: flex;

			flex-direction: column;
			justify-content: center;

			margin: 0;
			padding: 0;
			padding-top: 10vh;

			h1 {
				margin: 0;
				padding: 0;

				font-size: 15vh;
				line-height: 10vh;

				font-family: "Myriad Pro";


				span {
					font-family: 'Brush Script MT';
					font-size: 180%;
				}
			}
			h2 {
				font-size: 8vh;
				line-height: 12vh;
			}
		}

		.sport_images {
			flex: 1;

			display: flex;
			flex-direction: row;

			align-items: center;

			z-index: 100;
			position: relative;

			padding: 0;
			margin: 0;

			padding-left: 5%;
			padding-right: 5%;

			margin-top: -15vh;

			width: 100%;
			justify-content: center;

			background-image: url('Line.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;

			.image_1 {
				background-image: url('Soccer.png');
				background-size: contain;
				background-position: center center;
				background-repeat: no-repeat;
				height: 17vw;
				width: 17vw;
			}
			.image_2 {
				background-image: url('Netball.png');
				background-size: contain;
				background-position: center center;
				background-repeat: no-repeat;
				height: 17vw;
				width: 17vw;
			}
			.image_3 {
				background-image: url('Rugby.png');
				background-size: contain;
				background-position: center center;
				background-repeat: no-repeat;
				height: 30vw;
				width: 30vw;
			}
			.image_4 {
				background-image: url('Hockey.png');
				background-size: contain;
				background-position: center center;
				background-repeat: no-repeat;
				height: 17vw;
				width: 17vw;
			}
			.image_5 {
				background-image: url('Waterpolo.png');
				background-size: contain;
				background-position: center center;
				background-repeat: no-repeat;
				height: 17vw;
				width: 17vw;
			}
		}

		@media (max-width: 640px) {
			.title {
				padding-top: 5vh;
				h1 {
					font-size: 8vh;
				}

				h2 {
					font-size: 6vh;
				}
			}

			.sport_images {
				.image_1,
				.image_2,
				.image_4,
				.image_5 {
					display: none;
				}

				.image_3 {
					display: block;
					width: 90vw;
					height: 90vw;
				}
			}
		}

		@media (max-width: 768px) {
			.title {
				padding-top: 5vh;
				h1 {
					font-size: 8vh;
				}

				h2 {
					font-size: 6vh;
				}
			}

			.sport_images {
				.image_1,
				.image_2,
				.image_4,
				.image_5 {
					display: none;
				}

				.image_3 {
					display: block;
					width: 45vw;
					height: 45vw;
				}
			}
		}

		@media (max-width: 1024px) {
			.title {
				padding-top: 5vh;
				h1 {
					font-size: 8vh;
				}

				h2 {
					font-size: 6vh;
				}
			}

			.sport_images {
				.image_1,
				.image_5 {
					display: none;
				}

				.image_3  {
					width: 45vw !important;
					height: 45vw !important;
				}

				.image_2, .image_4 {
					display: block;
					width: 30vw !important;
					height: 30vw !important;
				}
			}
		}

		@media (max-width: 1280px) {
			.title {
				padding-top: 2vh;
				h1 {
					font-size: 10vh;
				}

				h2 {
					font-size: 7vh;
				}
			}

			.sport_images {
				.image_1,				
				.image_5 {
					display: none;
				}

				.image_3  {
					width: 45vw !important;
					height: 45vw !important;
				}

				.image_2, .image_4 {
					display: block;
					width: 30vw !important;
					height: 30vw !important;
				}
			}
		}
		@media (min-width: 1536px) {
			.title {
				padding-top: 8vh;
				h1 {
					font-size: 15vh;
				}

				h2 {
					font-size: 7vh;
				}
			}

		
		}
	}
</style>
