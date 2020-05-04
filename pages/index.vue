<template>
	<div id="app" v-cloak>
		<!-- navigation for larger screens -->
		<nav style="width:100%;position:fixed;" class="hidden-sm-and-down">
			<el-row type="flex" justify="space-evenly" :gutter="12">
				<el-col :span="1"></el-col>
				<span class="logo" float="left">
					<img width="40" src="@/assets/gitam.png" />
				</span>

				<el-col :span="5" :offset="5">
					<a href="#" class="nav-link">
						<font-awesome-icon icon="home" />
						<span>&nbsp; Home</span>
					</a>
				</el-col>

				<el-col :span="5">
					<a href="#about" class="nav-link">
						<font-awesome-icon icon="user-alt" />About me
					</a>
				</el-col>
				<el-col :span="5">
					<a href="#skill" class="nav-link">
						<font-awesome-icon icon="tools" />My skills
					</a>
				</el-col>
				<el-col :span="5">
					<a href="#interest" class="nav-link">
						<font-awesome-icon icon="rocket" />Interests
					</a>
				</el-col>
				<el-col :span="5">
					<a href="#footer" class="nav-link">
						<font-awesome-icon icon="phone" />Contact me
					</a>
				</el-col>
			</el-row>
		</nav>
		<!-- navigation for smaller screens -->
		<nav style="width:100%;position:fixed;" class="hidden-md-and-up">
			<el-row type="flex" justify="space-between">
				<el-col :span="1">
					<span class="logo" float="left">
						<img width="40" src="@/assets/gitam.png" />
					</span>
				</el-col>
				<el-col :span="1">
					<font-awesome-icon
						style="color:white;font-size:32px;margin-right:8%;"
						icon="bars"
						@click="navToggle=!navToggle"
					/>
				</el-col>
			</el-row>
			<div class="toggle" v-if="navToggle">
				<el-row class="nav-row" type="flex">
					<a href="#" @click="navToggle=false">
						<font-awesome-icon icon="home" />Home
					</a>
				</el-row>

				<el-row class="nav-row" type="flex">
					<a href="#about" @click="navToggle=false">
						<font-awesome-icon icon="user-alt" />About me
					</a>
				</el-row>
				<el-row class="nav-row" type="flex">
					<a href="#skill" @click="navToggle=false">
						<font-awesome-icon icon="tools" />My skills
					</a>
				</el-row>
				<el-row class="nav-row" type="flex">
					<a href="#interest" @click="navToggle=false">
						<font-awesome-icon icon="rocket" />Interests
					</a>
				</el-row>
				<el-row class="nav-row" type="flex">
					<a href="#" @click="navToggle=false">
						<font-awesome-icon icon="phone" />Contact me
					</a>
				</el-row>
			</div>
		</nav>
		<section class="particle">
			<vue-particles color="#deaaae" shapeType="cirle"></vue-particles>

			<div id="app-container">
				<!-- break a line if the nav bar is extended for mobile view so it wont cover the header top -->
				<div style="padding-top:120px;" v-if="navToggle"></div>
				<header>
					<h1 class="greet">Hello world !</h1>
					<el-row type="flex" justify="center">
						<img src="@/assets/3.jpeg" class="header-img" />
					</el-row>
					<el-row type="flex" justify="center">
						<el-col :span="24">
							<h1 class="header-h1">I'm Gitam</h1>
						</el-col>
					</el-row>
					<hr />
					<el-row type="flex" justify="center">
						<span style="color:#fff">
							<typewriter
								:speed="50"
								:full-erase="false"
								:interval="300"
								:words="[
                  'Web developer..',
                  'UI/UX designer..',
                  'Music Freak..',
                  'Football Maniac..'
                ]"
								:cursor="false"
							></typewriter>|
						</span>
					</el-row>
					<!-- Socail links -->
					<el-row type="flex" justify="center" :gutter="24" style="margin-top:20px;">
						<el-col :xl="2" :lg="2" :md="2">
							<a href="https://fb.com/giittam">
								<div class="social-icon">
									<font-awesome-icon :icon="['fab', 'facebook-f']" />
								</div>
							</a>
						</el-col>
						<el-col :xl="2" :lg="2" :md="2">
							<a href="https://twitter.com/gitamgadtaula">
								<div class="social-icon">
									<font-awesome-icon :icon="['fab', 'twitter']" />
								</div>
							</a>
						</el-col>
						<el-col :xl="2" :lg="2" :md="2">
							<a href="https://instagram.com/gitamgadtaula">
								<div class="social-icon">
									<font-awesome-icon :icon="['fab', 'instagram']" />
								</div>
							</a>
						</el-col>
						<el-col :xl="2" :lg="2" :md="2">
							<a href="https://www.quora.com/profile/Gitam-Gadtaula">
								<div class="social-icon">
									<font-awesome-icon :icon="['fab', 'quora']" />
								</div>
							</a>
						</el-col>
						<el-col :xl="2" :lg="2" :md="2">
							<a href="https://www.linkedin.com/in/gitamgadtaula/">
								<div class="social-icon">
									<font-awesome-icon :icon="['fab', 'linkedin-in']" />
								</div>
							</a>
						</el-col>
					</el-row>
				</header>
				<div class="mousey">
					<div class="scroller"></div>
				</div>
			</div>
		</section>

		<div style="background-color:black;">
			<section class="main hidden-sm-and-down" id="about">
				<el-row type="flex" justify="space-between" direction="column">
					<el-col :span="9" class>
						<img src="@/assets/me.jpeg" class="main-img" />
					</el-col>
					<el-col :span="15">
						<h1 class="header-h1" style="color:#111110; ">About Myself</h1>
						<h2 style="margin-top:10px;font-weight: 200;">
							I'm Gitam Gadtaula.
							<p style="font-size:18px; font-weight:400;">
								A simple, creative and a fun-loving person who likes to
								create things out of imagination.
							</p>

							<p style="font-size:18px; font-weight:400;padding-top:6px;">
								I am just among any other sapiens who is walking around with some purpose and
								ambition in their life. But in the meantime I also find
								myself to be carefree, enojying the present to the fullest without worrying what lies ahead in the future.
								I enjoy nature, literature, art, adventure, technology and computers, just to name a few. And when I look
								at people I sometimes make myself try and feel them as more than just
								a random person walking by.
							</p>
						</h2>
					</el-col>
				</el-row>
			</section>

			<section class="main hidden-md-and-up">
				<el-row type="flex" justify="space-between" direction="column">
					<el-col :span="4">
						<img src="@/assets/me.jpeg" class="main-img" style="width:120px;border-radius:50%;" />
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<h1 class="header-h1" style="color:#111110;">About myself</h1>
						<h2 style="margin-top:10px; font-weight: 200;">
							I'm Gitam Gadtaula.
							<p style="font-size:15px; font-weight:400;">
								A simple, creative and a fun-loving person who likes to
								create things out of imagination.
							</p>
							<br />
							<p style="font-size:15px; font-weight:400;">
								I am just among any other sapiens who is walking around with some purpose and
								ambition in their life. But in the meantime I also find
								myself to be carefree, enojying the present to the fullest without worrying what lies ahead in the future.
								I enjoy nature, literature, art, adventure, technology and computers, just to name a few. And when I look
								at people I sometimes make myself try and feel them as more than just
								a random person walking by.
							</p>
						</h2>
					</el-col>
				</el-row>
			</section>

			<section class="work">
				<el-row type="flex" justify="space-between">
					<el-col :span="12" class="animated bounceInRight" style="text-align:left;">
						<h1>
							Education
							<font-awesome-icon icon="university" />
						</h1>
						<h3>
							Computer science
							<font-awesome-icon icon="graduation-cap" />
						</h3>
						<h2>Kathmandu University</h2>
					</el-col>

					<el-col :span="12" class="animated bounceInLeft" style="text-align:right;">
						<h1>
							<font-awesome-icon icon="building" />Work
						</h1>
						<h3>
							<font-awesome-icon icon="terminal" />Web Developer
						</h3>
						<h2>Rasello Nepal</h2>
					</el-col>
				</el-row>
				<!-- <div class="block">
          <el-timeline>
            <el-timeline-item timestamp placement="top" style="color:white;">
              <div class="bubble bubble-text">
                <h3>
                  Education
                  <i class="fas fa-university"></i>
                </h3>
                <br />
                <h4>
                  <i class="fas fa-graduation-cap"></i>
                  Kathmandu University
                </h4>
                <p style="margin-top:0px;">Computer Science</p>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp placement="top" style="color:white;">
              <div class="bubble bubble-text">
                <h3>
                  Work
                  <i class="fas fa-university"></i>
                </h3>
                <br />
                <h4>
                  <i class="fas fa-terminal"></i>
                  Web Developer
                </h4>
                <p style="margin-top:0px;">Rasello Nepal</p>
              </div>
            </el-timeline-item>
            <el-timeline></el-timeline>
          </el-timeline>
				</div>-->
			</section>
		</div>
		<section class="skill" id="skill">
			<h1 class="header-h1">
				MY SKILLS
				<font-awesome-icon icon="tools" />
			</h1>
			<div style="margin-top:20px;color:white;">
				<p class="skill-desc">
					<i>
						I am a fresh university graduate in computer science who has just kicked off his
						career in Information technogly. Eventhough I'm a newbie in this
						competetive field, the way I have shaped myself during my acadameic
						spell and my internship later has me helped a lot to quickly grasp
						the new things floating around the air. Listed below are my skill sets, but not limited to :
					</i>
				</p>
				<el-row type="flex" justify="space-between" style="margin-bottom:10px;">
					<el-col :span="11">
						<p class="skill-name">HTML5</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:90%;"></div>
						</div>
					</el-col>
					<el-col :span="11">
						<p class="skill-name">CSS3</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:90%;"></div>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between" style="margin-bottom:10px;">
					<el-col :span="11">
						<p class="skill-name">Javascript</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:75%;"></div>
						</div>
					</el-col>
					<el-col :span="11">
						<p class="skill-name">PHP</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:80%;"></div>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between" style="margin-bottom:10px;">
					<el-col :span="11">
						<p class="skill-name">Vue js</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:70%;"></div>
						</div>
					</el-col>
					<el-col :span="11">
						<p class="skill-name">Laravel</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:65%;"></div>
						</div>
					</el-col>
				</el-row>

				<el-row type="flex" justify="space-between" style="margin-bottom:10px;">
					<el-col :span="11">
						<p class="skill-name">Python</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:45%;"></div>
						</div>
					</el-col>
					<el-col :span="11">
						<p class="skill-name">Photoshop</p>
						<div class="skill-container">
							<div class="skill-container-child" style="width:45%;"></div>
						</div>
					</el-col>
				</el-row>
			</div>
		</section>

		<div style>
			<section class="interest" id="interest">
				<h1 class="header-h1" style="margin-bottom:10px;">
					MY INTERESTS
					<font-awesome-icon icon="rocket" />
				</h1>
				<carousel-3d
					style="border:none;"
					:width="620"
					:height="560"
					:autoplay="true"
					:autoplay-timeout="5000"
					:controls-visible="true"
				>
					<slide v-for="(slide, i) in assets" :index="i" :key="i">
						<template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
							<img
								:data-index="index"
								:class="{
                  current: isCurrent,
                  onLeft: leftIndex >= 0,
                  onRight: rightIndex >= 0
                }"
								:src="slide.img"
							/>
							<h3 class="c-caption">{{ slide.caption }}</h3>
							<h3 class="c-desc">{{ slide.desc }}</h3>
						</template>
					</slide>
				</carousel-3d>
			</section>
			<section class="footer" id="footer">
				Made with
				<span style="color:red;">
					<font-awesome-icon icon="heart" />
				</span>
				in Quarantine.
				<p>
					<font-awesome-icon icon="envelope" />gitamgadtaula@gmail.com
				</p>
				<p>
					<font-awesome-icon icon="map-marker-alt" />Kathmandu Nepal
				</p>
				<div style="max-width:50%;margin-left:auto;
          margin-right:auto;display:block;">
					<el-divider>
						<el-col :span="3">
							<i class="el-icon-star-on"></i>
						</el-col>
					</el-divider>
				</div>
				<h3 style="margin-bottom:10px;">Powered by</h3>
				<img src="@/assets/logo.png" height="40" />
				<img src="@/assets/nuxt.png" height="40" />
				<img src="@/assets/element.svg" height="40" />
			</section>
		</div>
	</div>
</template>
<style scoped>
	.nav-link {
		margin-top: 2px;
	}
	.nav-link:hover {
		background-color: #00adfc;
		padding: 8px;
		border-radius: 4px;
	}
	.nav-row {
		padding-top: 9px;
		padding-bottom: 9px;
		padding-left: 4px;
		background: black;
	}
	.nav-row:hover {
		background-color: #00adfc;
		/* width: 100%; */
	}
	.carousel-3d-slide {
		background: linear-gradient(
			30deg,
			rgb(255, 255, 255) 00%,
			rgb(105, 163, 221) 80%,
			rgb(30, 25, 66) 100%
		);
		border: none;
	}

	@media only screen and (max-width: 580px) {
		.c-desc {
			font-size: 14px;
		}
	}
</style>


<script>
	const img1 = require("@/assets/football2.jpg");
	const img2 = require("@/assets/guitar.jpg");
	const img3 = require("@/assets/travel1.jpg");

	export default {
		name: "App",
		data() {
			return {
				navToggle: false,
				assets: [
					{
						img: img1,
						caption: "Football",
						desc:
							"Football is not just another game, it's emotion. We don't have to speak or dress a certain way or even know the same language to communicate with another football fan or a player. It's a sport for the whole universe."
					},
					{
						img: img2,
						caption: "Music",
						desc:
							"Music is far more than just a pleasant sound to the ear. I never find myself alone cause wherever I go music goes along with me. I love playing guitar, its therapeutic and releases a hepty amount of dopamine in my brains."
					},
					{
						img: img3,
						caption: "Travelling",
						desc:
							"Travelling helps open my mind. You realize that there's no one way to live life. Meeting people from other places will show you that your world view isn't the same as everyone else's.  By being exposed to new places, people and cultures, it helps me develop a wider world view."
					}
				]
			};
		}
	};
</script>
