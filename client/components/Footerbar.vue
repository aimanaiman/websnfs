<template>
	<div class="footer">
		<section id="footer">
		<footer>
			<nav class="nav-menu">
				<ul>
					<li>
						<router-link to="/about-us">About Us</router-link>
					</li>
					<li>
						<router-link to="/partnership">Partnership</router-link>
					</li>
					<li>
						<router-link to="/privacy-policy">Privacy Policy</router-link>
					</li>
				</ul>
			</nav>
			<div class="subscribe">
			<form action="" netlify>
				<input type="text" placeholder="Email">
				<button class="btn">Subscribe</button>
				<p>Sign up for our upadates and news.</p>
				</form>
			</div>
			<div class="social">
				<p>Follow Us On</p>
				<div class="social-media">
					<a
						href="https://www.facebook.com/supernomadfriendsquad/"
					  target="_blank">
						<img src="../image/facebook.png" alt="Super Nomad Friend Squad Facebook">
					</a>
					<a
						href="https://www.instagram.com/supernomadfriendsquad/"
					  target="_blank">
						<img src="../image/instagram.png" alt="Super Nomad Friend Squad Facebook">
					</a>
					<a
						href="https://medium.com/super-nomad-friend-squad"
					  target="_blank">
						<img src="../image/medium.png" alt="Super Nomad Friend Squad Facebook">
					</a>
					<a
						href="https://twitter.com/supernomadfs"
					  target="_blank">
						<img src="../image/twitter.png" alt="Super Nomad Friend Squad Facebook">
					</a>
				</div>
			</div>
			</footer>
		</section>
		<section id="copy">
			<div class="container">
				<span>All rights reserved. Super Nomad Friend Squad 2016</span>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'footerbar'
	}
</script>

<style>
#footer{
	background-color: rgba(236, 240, 241,1.0);	
	padding: 50px 0;
}
#copy{
	padding: 20px;
	text-align: center;
	background-color: #363636;
	color: white;
	span{
		font-size: 12px;
	}

}
.nav-menu{
	ul {
		margin: 0;
		li {
			list-style: none;
			padding-bottom: 10px;
			a {
				font-family: 'GT Walsheim';
				color: #363636;
				font-size: 15px;
			}
		}
	}
}
	footer{
		display: flex;
		justify-content: space-between;
		max-width: 1300px;
		padding: 0 20px;
		margin: 0 auto;
	}
	.subscribe {
		form {
			display: flex;
			flex-direction: column;
		}
		p {
			text-align: center;
			margin-top: 0;
		}
		input {
			border:none;
			height: 40px;
			width: 330px;
			padding: 0 20px;
			font-size: 18px;
			&:focus {
				outline:none;
			}
		}
		.btn {
			margin: 10px 0;
			border: none;
			border-radius: 5px;
			padding: 10px;
			background-color: rgba(46, 204, 113,1.0);
			color: white;
			font-family: 'Brandon Grotesque';
			text-transform: uppercase;
			cursor: pointer;
			box-shadow: 0px 5px 0px 0px #15B358;
			&:hover{
				opacity:0.9;
			}
		}
	}
	.social {
		.social-media{
			display: flex;
			justify-content: space-between;
		}
		p{
			margin-top: 0;
			text-align: center;
		}
		img {
			width: 30px;
			margin: 0 10px;
		}
	}
</style>