<template>
  <div class="page">
  	<header>
  	<section id="home-header">
  		<h1>We'll be </h1><span id="verb"></span><h1>in</h1><h1 id="location"></h1>
  	</section>
  	</header>
  	<section id="what">
  		<div class="container">
  			<h2>6 Cities in 12 Months</h2>
  			<p>
  				<strong>Super Nomad Friend Squad</strong> is a gathering of remote professionals and digital nomads from all over the world. Together we will embark on a year long journey across the globe. Living in six different cities, spending two months in each city. Immersing ourselves in awesome <strong>food</strong>, in awesome <strong>locations</strong>  with awesome <strong>company</strong>.
  			</p>
  			<div class="where-items">
	  			<div class="where-card">
	  				<img src="../image/tokyo.jpg" alt="">
	  				<p>Tokyo , Japan</p>
	  			</div>
	  			<div class="where-card">
	  				<img src="../image/chiangmai.jpg" alt="">
	  				<p>Chiang Mai , Thailand</p>
	  			</div>
	  			<div class="where-card">
	  				<img src="../image/tokyo.jpg" alt="">
	  				<p>Tallinn , Estonia</p>
	  			</div>
  			</div>
  			<div class="where-items">
	  			<div class="where-card">
	  				<img src="../image/tokyo.jpg" alt="">
	  				<p>Split , Croatia</p>
	  			</div>
	  			<div class="where-card">
	  				<img src="../image/chiangmai.jpg" alt="">
	  				<p>Rio de Jenerio , Brazil</p>
	  			</div>
	  			<div class="where-card">
	  				<img src="../image/tokyo.jpg" alt="">
	  				<p>Buenos Aires , Argentina</p>
	  			</div>
  			</div>
  		</div>
  	</section>
  	
  	<section id="community">
  		<div class="community-overlay">
	  		<div class="container">
	  			<h2>The Squad</h2>
	  			<p>
	  				Our core value is in our <strong>community</strong>. We will be assembling a squad of individuals from around the globe, to embark on this adventure. This clashing of unique individuals will morph into its own entity, shaping <strong>'you'</strong>, just as much as you would shape <strong>'it'</strong>. (Thats some high level shit right there)
					</p>
					<p>
						A homebase for you to come and go to as you wish. Opportunity for collaborations. A support system for when you need one. Or just simply to talk shit with. What ever you choose to do. The <strong>squad</strong> is here for you to use and abuse.
					</p>
	  		</div>
	  	</div>
  	</section>
  	<section id="quote-1">
  		<div class="container">
  			<blockquote>
  				If you think our name is stupid and you like it. You are perfect for this program."
  			</blockquote>
  			<span class="quoter">
  				- Aiman Farhan, Super Nomad Friend Squad -
  			</span>
  		</div>
  	</section>
  		<section id="more">
  		<div class="container">
  			<h2>Applications for 2017</h2>
  			<p>
  				Applications are now open for 2017. Learn more about SNFS and when your ready, fill out the <router-link to="/apply-now">application form</router-link>. Once we've received your application, we will setup a Skype interview with you. We will then guide you to the next step, if your application is approved.
  			</p>
  			<div class="more-items">
  				<div class="more-card grow">
  					<router-link to="/program">
							<img src="../image/tokyo.jpg" alt="">
							<span>Learn More</span>
						</router-link>
  				</div>

  				<div class="more-card grow">
  					<router-link to="/program">
							<img src="../image/tokyo.jpg" alt="">
							<span>Meet The Team</span>
						</router-link>
  				</div>

  				<div class="more-card grow">
  					<router-link to="/program">
							<img src="../image/tokyo.jpg" alt="">
							<span>Partnership</span>
						</router-link>
  				</div>
  				
  			</div>
  		</div>
  	</section>
  </div>
</template>
<script>
	import { typeIt } from 'typeit'

	$('#verb').typeIt({
		strings: ['eating sushi','killing hookers'],
		speed: 40
	});
</script>
<style>
	#home-header{
		background: url('../image/home-header.jpg') center bottom ;
		background-size: cover;
		height: 100vh;
		h1{
			text-align: center;
			font-size: 65px;
			color: white;
			margin-top:200px;
			position: relative;
		}
		span{
			font-family: inherit;
			font-size: inherit;
			color: inherit;
		}
	}
	#what {
		.container {
		}
		h2 {
			text-align: center;
		}
		p {
			font-size: 19px;
			}
		.where-card {
			img {
				z-index: 1;
				display: flex;
				position: relative;
			}
			p {
				color: white;
				background-color: rgba(0,0,0,0.8);
				font-family: 'Brandon Grotesque';
				font-size: 13px;
				text-transform: uppercase;
				text-align: right;
				margin: 0;
				z-index: 2;
				padding: 5px 20px;
			}
		}
	}

	.where-items {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-top: 30px;
		.where-card {
			img {
				z-index: 1;
				display: flex;
				position: relative;
			}
			p {
				color: white;
				background-color: rgba(0,0,0,0.8);
				font-family: 'Brandon Grotesque';
				font-size: 13px;
				text-transform: uppercase;
				text-align: center;
				margin: 0;
				z-index: 2;
				padding: 5px 20px;
			}
		}
	}

	#community{
		text-align: center;
		background-color: #343434;
		color: white;
		background: url('../image/squad.jpg')center;
		background-size: cover;
		padding: 0;
		p {
			font-size: 19px;
		}
		.community-overlay{
			height: 100%;
			background: rgba(44, 62, 80, 0.8);
			background-size: cover;
			z-index: 10;
			padding: 50px 0;
		}
	}

	#quote-1 {
		/*background: url('../image/where.jpg');*/
		background-size: cover;
		background-color: #F5D76E;
		padding: 20px 0;
		blockquote{
			font-size: 35px;
			font-family: 'GT Walsheim';
			quotes: "\201C""\201D""\2018""\2019";
		}
		blockquote:before {
		  /*color: #ccc;*/
		  content: open-quote;
		  font-size: 3em;
		  line-height: 0.1em;
		  margin-right: 0.25em;
		  vertical-align: -0.4em;
		}
		blockquote p {
		  display: inline;
		}
		.quoter {
			font-family: 'Brandon Grotesque';
			text-align: right;
			font-size: 15px;
			display: flex;
			justify-content: flex-end;
			letter-spacing:0.4px;
		}
	}
	#more{
		background-size: cover;
		h2 {
			text-align: center;
			margin-bottom: 50px;
		}
		p{
			margin-bottom: 30px;
		}
	}
	.more-items {
		display: flex;
		justify-content: space-between;
	}
	.more-card{
		background-color: #323232;
		width: 300px;
		position: relative;
		top: 50%;
		left: 50;
		
		img{
			margin: 0;
			z-index: -1;
		}
		span{
			display: flex;
			text-align: center;
			justify-content: center;
			margin: 0;
			padding: 5px 0;
			color: white;
			font-family: 'Brandon Grotesque';
			text-transform: uppercase;
			font-size: 14px;
			z-index: 2;

		}
	a {
		text-decoration: none;
		 }
	}
	
</style>