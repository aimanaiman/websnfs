<template>
	<div class="navbar nav-wrapper">
		<div class="container">
			<div class="logo">
				<router-link to="/" href="#what">
					<img src="../image/logo.png" alt="" id="logo">
				</router-link>
			</div>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li>
					<router-link to="/program">How It Works</router-link>
				</li>
				<!-- <li>
					<router-link to="/itinerary">Itinerary</router-link>
				</li> -->
				<li>
					<router-link to="/faq">FAQ</router-link>
				</li>
				<li>
					<router-link to="/apply-now">Apply Now</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'navbar'
	}
</script>

<style>
	.logo{
		background-color: rgba(244, 179, 80,0.95);
		padding-right: 8px;
	}
	#logo {
		width: 200px;
		padding: 0 20px;
		margin: 0;
	}
	.navbar {
		/*display: none;*/
		position: fixed;
		width: 100%;
		background-color: rgba(54,54,54,0.9);
		box-shadow: 2px 3px 5px 0 rgba(0,0,0,0.25);
		z-index: 3;
		.container{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0;
		}
		ul {
				display: flex;
				flex-direction: row;
			li {
				list-style: none;
				a {
					font-family: 'GT Walsheim';
					text-decoration: none;
					padding: 20px;
					color: #fff;

					/*text-transform: uppercase;*/
					font-size: 15px;
/*					letter-spacing: 0.9px;
*/				}
				.router-link-active{
					color: #1BBC9B;
					font-size: 15px;
					transition: all .65s ease;
				}
			}
		}
	}

</style>