<template>
<div class="page">
	<section id="cost">
		<div class="container">
			<div class="price">
				<h3>How Much Does it Cost?</h3>
				<p>Downpayment of <strong>$3,400</strong> once your application is approved. Once the program commences, it will be <strong>$1,600/month</strong> (on the 2nd month onwards).
				</p>
				<div class="comparison">
				<h3>Compared to:</h3>
				<p>Monthly expenses, not including food and entertainment.
				</p>
				<div class="cost-bar">
					<div class="cost new-york">
						<span>New York - $3,941</span>
					</div>
				</div>
				<div class="cost-bar">
					<div class="cost san-francisco">
						<span>San Francisco - $3,460</span>
					</div>
				</div>
				<div class="cost-bar">
					<div class="cost hong-kong">
						<span>Hong Kong - $3,306</span>
					</div>
				</div>
				<div class="cost-bar">
					<div class="cost london">
						<span>London - $2,981</span>
					</div>
				</div>
				<div class="cost-bar">
					<div class="cost snfs">
						<span>SNFS - $1,600</span>
					</div>
				</div>
			</div>
			</div>
			<div class="image">
				<img src="../image/city.jpg" alt="">
			</div>
		</div>
	</section>
	<section id="whats-included">
		<div class="community-overlay">
			<div class="container">
				<h2>What's Included?</h2>
				
				<div class="included">
					<div class="included-items">
						<h3>Travel</h3>
						<p>All transportations between all cities through out the entire program. Flight to 1st destination and the final flight home not included.</p>
					</div>
					<div class="included-items">
						<h3>Accommodation</h3>
						<p>Comfortable private lodging for the entire year. With convenient access to the best spots of the cities.</p>
					</div>
				</div>
				
				<div class="included">
					<div class="included-items">
						<h3>Coworking Space</h3>
						<p>Access to cool coworking workspace and wifi. Perfectly condusive to working hard and opportunity to network with other professionals. </p>
					</div>
					<div class="included-items">
						<h3>Personal Development</h3>
						<p>Workshops, trainings and meetups held on a regular basis. Sharpening our skills in both our personal and professional life.</p>
					</div>
				</div>

				<div class="included">
					<div class="included-items">
						<h3>Social Activities and Events</h3>
						<p>Hanging out with the squad and locals, doing <strong>fun shit</strong>. From simple outings and barbeques to getting involved in community projects, all the way to crazy adventures.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="quote-1">
		<div class="container">
			<blockquote>
				Life is too short
			</blockquote>
			<span class="quoter">
				- Every Human Being, Planet Earth -
			</span>
		</div>
	</section>
	<section id="glory">
		<div class="container">
			<h2>Community + Convenience</h2>
			<p>You know how people create their fantasy sports or whatever team, they come up with a ridiculously overpowered team, that's never gonna happen. That's exactly how we create our community.</p>
		</div>
		<div id="pics">
			<div class="container">
			<img src="../image/tokyo.jpg" alt="">
			<div class="travel pics-desc">
				<p>Travel</p>
			</div>
			<img src="../image/chiangmai.jpg" alt="">
			</div>
			<div class="container">
				<div class="travel pics-desc">
					<p>Travel</p>
				</div>
				<img src="../image/chiangmai.jpg" alt="">
				<div class="travel pics-desc">
					<p>Travel</p>
				</div>
			</div>
			<div class="container">
				<img src="../image/tokyo.jpg" alt="">
				<div class="travel pics-desc">
					<p>Travel</p>
				</div>
				<img src="../image/chiangmai.jpg" alt="">
			</div>
			</div>
	</section>			
</div>
</template>

<script></script>

<style>
.community-overlay{
			height: 100%;
			background: rgba(44, 62, 80, 0.8);
			background-size: cover;
			z-index: 10;
			padding: 50px 0;
		}
#cost{
	.container{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	
	h3{
		margin-bottom: 0;
	}
	p{margin-top: 5px;}
}
.price{
	width: 50%;
	margin-bottom: 30px;
}
.image{float: right;
	img{
		width: 280px;
		/*height: 420px;*/
		top:0;
	}
	}
.comparison{
	/*width: 50%;*/
	span{
		margin-bottom: 30px;
	}
}
.cost-bar{
	display: inline-block;
	background-color: rgba(236, 240, 241,1.0);
	padding: 0 ;
	width: 100%;
	margin:5px auto;
	span{
		padding-left: 5px;
	}
	.cost{
		color: white;
		padding:5px;
		z-index: 2;
	}
	.new-york{width: 95%;background-color: #3A539B;}
	.san-francisco{width:80%;background-color: #674172;}
	.hong-kong{width:70%;background-color: #C0392B;}
	.london{width:55%;background-color: #1E824C;}
	.snfs{width:40%;background-color: #E67E22;}
}
	#whats-included{
		background-color: #363636;
		background: url('../image/coworking.jpg') center;
		color: #fff;
		padding: 0;
		/*padding: 50px 0;*/
		.included {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}
		.included-items{
			width: 45%;
		}
		h2{
			text-align: center;
			margin-bottom: 30px;
		}
		h3{
			font-family: 'Brandon Grotesque';
			text-transform: uppercase;
			font-size: 17px;
			margin-bottom: 0;
		}
		p {
			margin-top: 0;
			font-size: 17px;
		}
	}
	#pics{
		.container{
			margin:0 auto;
			display: flex;
		},
		.pics-desc{
			width: 300px;
			height: 200px;
			margin: 0;
			background-color: #363636;
			padding: 20px;
			p{
				color: white;
				text-align: center;
				font-size: 18px;
			}
		}

	}
</style>