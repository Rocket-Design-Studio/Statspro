<script lang="ts">
// Page script goes here

import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/svelte-splide/css';

const TA = [{
    src: 'ta1.png',
    alt: 'Dog'
  }, {
    src: 'ta2.png',
    alt: 'Building'
  },{
    src: 'ta3.png',
    alt: 'Staircase'
  }
  ,{
    src: 'ta4.png',
    alt: 'Staircase'
  }]


</script>

<div class="products">
	<div class="products_content">
		<div>
			<h2 style="color: #fc5200; margin-top: 1rem;">Products and Services</h2>

			<p>
				At Statspro, we understand the need to convert training, testing and on-field data analysis
				into increased on field performance.
			</p>
			<p>
				For most teams, the coach does not have the luxury to bring in players from outside their
				group. The goal is thus to manage your players as best you can, and get their buy-in to
				train as hard as they can, without getting injured.
			</p>
			<p>
				Knowledge in the hands of the player leads to buy-in. They see that their on-field, and
				training effort contribute to their ranking, and that encourages them to train harder.
			</p>
			<p>
				We offer a wide range of services that all forms part of one product. This allows you to
				tailor your experience according to your budget.
			</p>
		</div>

		<div class="features">
			<div class="row">
				<div class="column">
					<h3 style="color: #fc5200;">User Friendly Software</h3>
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">24 Hour Turnaround Time</h3>
                    
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">In the hands of the players</h3>
				</div>
			</div>
			<p>Players and coaches have access to all their stats and clips on their phones or laptops</p>
		</div>

		<div class="team-analysis">
			<h2 style="color: #fc5200; margin-top: 2rem;">Team and Player Analysis</h2>
			<p>Our Basic service can either be team only or the full team - and player – event coding.</p>

			<div class="row">
				<div class="column">
					<Splide options={ {
						rewind: true,
						gap   : '1rem',
						autoplay: true,
					  } }>
						<SplideSlide>
						  <img src="ta1.png" alt="Image 1"/>
						</SplideSlide>
						<SplideSlide>
						  <img src="ta2.png" alt="Image 2"/>
						</SplideSlide>
						<SplideSlide>
							<img src="ta3.png" alt="Image 2"/>
						  </SplideSlide>
						  <SplideSlide>
							<img src="ta4.png" alt="Image 2"/>
						  </SplideSlide>
					  </Splide>
				</div>
			</div>
	
		</div>

		<div class="match-graphs">
			<h2 style="color: #fc5200; margin-top: 2rem;">Match Graphs</h2>
			<p>Match graphs are easy to interpret and well laid out. 
			</p>
			<p>On the Match Graphs page we only show relevant easy to understand graphs.
			</p>

			<div class="row">
				<div class="column">
					<Splide options={ {
						rewind: true,
						gap   : '1rem',
						autoplay: true,
					  } }>
						<SplideSlide>
						  <img src="mg1.png" alt="Image 1"/>
						</SplideSlide>
						<SplideSlide>
						  <img src="mg2.png" alt="Image 2"/>
						</SplideSlide>
						<SplideSlide>
							<img src="mg3.png" alt="Image 2"/>
						  </SplideSlide>
						  <SplideSlide>
							<img src="mg4.png" alt="Image 2"/>
						  </SplideSlide>
						  <SplideSlide>
							<img src="mg5.png" alt="Image 2"/>
						  </SplideSlide>
					  </Splide>
				</div>
			</div>

		</div>

		<div class="match-graphs">
			<h2 style="color: #fc5200; margin-top: 2rem;">Player Management</h2>
			<p>The Player management Platform consists out of 4 sections</p>
			<p>On the Match Graphs page we only show relevant easy to understand graphs.</p>
			<ul>
				<li>1. The Player Profile <br>To the player – The Player Profile is the 
					one place where all his  training, testing
					and on-field data can be viewed. 
					
					In addition, it is also the page where he can 
					see his strengths and weaknesses compared
					to other players in his position and league. 
					
					All his stats are linked to video. 
					 </li>
				<li>2.  Coaches Dashboard<br> Coaches can see all the Player profiles of the players in 
					his squad. 
			   
				   Soon he will be able to see how long each player spent 
				   on the system, when last did each player train, and what 
				   his current training load is.</li>
			</ul>

			<div class="row">
				<div class="column">
					<Splide options={ {
						rewind: true,
						gap   : '1rem',
						autoplay: true,
					  } }>
						<SplideSlide>
						  <img src="pm1.png" alt="Image 1"/>
						</SplideSlide>
						<SplideSlide>
						  <img src="pm2.png" alt="Image 2"/>
						</SplideSlide>
						<SplideSlide>
							<img src="pm3.png" alt="Image 2"/>
						  </SplideSlide>
						  <SplideSlide>
							<img src="pm4.png" alt="Image 2"/>
						  </SplideSlide>
						  <SplideSlide>
							<img src="pm5.png" alt="Image 2"/>
						  </SplideSlide>
					  </Splide>
				</div>
			</div>
			<p>Coaches have full access to all the training, testing and playing data of the whole squad and individuals</p>
			<p>See which players have not trained yet. 
			</p>
			<p>Compare selected players to the team average over time. 
			</p>
			<p>Capture and compare your own gym test batteries over time. 
			</p>

			<h2 style="color: #fc5200; margin-top: 2rem;">Training Program creation and sharing</h2>

			<p>Coaches and S&C staff will be able to create custom training programs or select from the Statspro range of training programs.</p>
			<p>Training programs are shared with all, or selected players.
			</p>
			<p>A player simply go to his/her calendar to view the training session for the day. 
			</p>
			<p>The Player then fills in what weights he used.</p>
			<p>All training and testing data will be showed on the player profile. </p>

		</div>

		<div class="pricing">
			<h2 style="color: #fc5200; margin-top: 2rem;">Pricing</h2>
			<div class="row">
				<div class="column">
					<h3 style="color: #fc5200;">Team and Player Analysis</h3>
					<div class="img" style="background: url(ta1.png);background-position: center; background-size: contain ; background-repeat: no-repeat;"></div>
					<p>Includes:</p>
					<p>Team - and Player – stats linked to video clips.</p>
					<p>Easy to understand match graphs.</p>
					<p>Create coaching clips and save and share them with the squad or selected players. </p>
					<h4 class="cost" style="color: #fc5200; margin-top: 1rem;">Cost: 105 EUR per match</h4>
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">Team Event Only Coding</h3>
					<div class="img" style="background: url(ta3.png);background-position: center; background-size: contain ; background-repeat: no-repeat;"></div>
					<p>Includes:</p>
					<p>This option is mostly used for junior teams. 
					</p>
					<p>Players and coaches can login and view stats and clips of all the kicks, penalties, tries, lineouts and scrums in the match.
					</p>
					<h4 class="cost" style="color: #fc5200; margin-top: 1rem;">Cost: 65 EUR per match</h4>
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">Live Code</h3>
					<div class="img" style="background: url(mg1.png);background-position: center; background-size: contain ; background-repeat: no-repeat;"></div>
					<p>Includes:</p>
					<p>At half time you have 3 min to say 3things. Let our live data help you to say the right 3 things.
					</p>
					<p>Drill down into all the main areas to be able to interpret data while the match is still on.
					</p>
					<h4 class="cost" style="color: #fc5200; margin-top: 1rem;">Cost: 65 EUR per match</h4>
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">Opposition Analysis</h3>
					<div class="img" style="background: url(mg2.png);background-position: center; background-size: contain ; background-repeat: no-repeat;"></div>
					<p>Includes:</p>
					<p>Team event only or team – and player event analysis.
					</p>
					<p>Everyone in the squad has access to all your opposition’s data.
					</p>
					<p>View stats and clips of how they score their tries, where they throw in the lineouts, and who their main ball carriers are. 
					</p>
					<h4 class="cost" style="color: #fc5200; margin-top: 1rem;">Cost: 65 EUR per match for team event only coding and 105 EUR per match for team and player event coding.</h4>
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">Player Management</h3>
					<div class="img" style="background: url(pm2.png);background-position: center; background-size: contain ; background-repeat: no-repeat;"></div>
					<p>Includes:</p>
					<p>Coaches will soon be able to  monitor training, testing and playing data of the whole squad and individuals
					</p>
					<p>Capture all testing data and compare the group and the player’s progress over time. 
					</p>
					<p>Players are motivated through our ranking system. Every tackle and every test result will have an effect on the player’s ranking. 
					</p>
					<h4 class="cost" style="color: #fc5200; margin-top: 1rem;">Cost: 400EUR for a squad of 23 players or 500 EUR for all the players in the club or school.
			 </h4>
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">Player Profile</h3>
					<div class="img" style="background: url(pm1.png);background-position: center; background-size: contain ; background-repeat: no-repeat;"></div>
					<p>Includes:</p>
					<p>This is the ultimate platform for a player to know where he stands relative to other players in his position and league. </p>
					<p>Players are motivated through our ranking system. Every tackle and every test result will have an effect on the player’s ranking. 
					</p>
					<p>View all a player’s stats and clips from all his matches in one place.</p>
					<h4 class="cost" style="color: #fc5200; margin-top: 1rem;">Cost: Is included in the player management cost. If the club opts out of the Player Management. 21 EUR per year – Paid Annually.
						</h4>
				</div>
				<div class="column">
					<h3 style="color: #fc5200;">Visual CV's</h3>
					<div class="img" style="background: url(vcv.png);background-position: center; background-size: contain ; background-repeat: no-repeat;"></div>
					<p>Includes:</p>
					<p>Every player that aspires to make a career out of sport should have a visual CV. 
					</p>
					<p>We have helped more than 100 players to showcase their talents in a 5 min highlights video. 
					</p>
					<h4 class="cost" style="color: #fc5200; margin-top: 1rem;">Cost: 120 EUR per visual CV.
					</h4>
				</div>
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
