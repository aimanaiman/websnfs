<template>
	<div class="page">
		<section id="form">
			<div class="container">

				<div class="form">
				<h2>Application Form</h2>
					<form action="thank-you" netlify>
						<div class="half">
							<p>
						    <label for="name">First Name</label>
						    <input type="text" name="name">
						  </p>
						  <p>
						    <label>Last Name</label>
						    <input type="text" name="name">
						  </p>
						</div>
						<div class="half">
							<p>
						    <label>Email </label>
						    <input type="email" name="email">
						  </p>
						  <p>
						    <label>Skype ID</label>
						    <input type="text" name="skype">
						  </p>
						</div>
						<div class="full">
							<p>
						    <label>Country of Citizenship</label>
						    <input type="text" name="skype">
					  	</p>
					  	<p>
						    <label>LinkedIn Profile</label>
						    <input type="text" name="linkedin">
					  	</p>
					  	<p>
						    <label>Other Profile</label>
						    <input type="text" name="other-url">
					  	</p>
					  	<p>
						    <label>Current job title and company</label>
						    <input type="text" name="job">
					  	</p>
						</div>

						<div class="radios">
							<p>Income Level</p>
							<select name="income" id="income">
								<option value="0-30k">0- $30,000</option>
								<option value="30k-60k">$30,000- $60,000</option>
								<option value="61k">$60,000 and above</option>
							</select>
							
							<p>Can you financially sustain yourself through out the entire program?</p>
							<div class="option">
								<input type="radio" id="financial-yes" name="financial">
								<label for="financial-yes">Yes</label>
							</div>
							<div class="option">
								<input type="radio" id="financial-no" name="financial">
								<label for="financial-no">No</label>
							</div>
							<div class="option">
								<input type="radio" id="financial-unsure" name="financial">
								<label for="financial-unsure">Unsure</label>
							</div>
							
							<p>Does job allow you to work remotely?</p>
							<div class="option">
								<input type="radio" id="remote-yes" name="remote">
								<label for="remote-yes">Yes</label>
							</div>
							<div class="option">
								<input type="radio" id="remote-no" name="remote">
								<label for="remote-no">No</label>
							</div>
							
							<p>Are You Currently Working remotely?</p>
							<div class="option">
								<input type="radio" id="current-yes" name="current">
								<label for="current-yes">Yes</label>
							</div>
							<div class="option">
								<input type="radio" id="current-no" name="current">
								<label for="current-no">No</label>
							</div>

							<p>When do you prefer to depart?</p>
							<div class="option">
								<input type="radio" id="march" name="depart">
								<label for="march">March 2017</label>
							</div>
							<div class="option">
								<input type="radio" id="june" name="depart">
								<label for="june">June 2017</label>
							</div>
							<div class="option">
								<input type="radio" id="either" name="depart">
								<label for="june">Either one is fine</label>
							</div>
						</div>

						<div class="full">
							<p>
						    <label for="tell-us">
						    	Tell us about yourself and your job.
						    </label>
						    <textarea rows="6" name="tell-us" id="tell-us"></textarea> 
					  	</p>
					  	<p>
						    <label>
						    	Why do you want to join Super Nomad Friend Squad?
						    </label>
						    <textarea rows="6"></textarea> 
					  	</p>
					  	<p>
						    <label>
						    	Anything else that you'd like to ask us? Or let us know.
						    </label>
						    <textarea rows="6"></textarea> 
					  	</p>
						</div>
						<div class="half">
							<button class="btn">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<style>
	#program-faq{
		background-color: #363636;
		color: white;
	}
	#form {
		background: url(../image/home-header.jpg)center;
		background-size: cover;
		background-attachment: fixed;
		
		.form{
			opacity: .95;
			max-width: 900px;
			padding: 50px;
			background: rgba(255, 255, 254,0.8);
			border-radius: 5px;
		}
		form {			
			label{
				display: block;
				padding: 5px 0;
				font-family: 'Brandon Grotesque';
				text-transform: uppercase;
				font-size: 13px;
			}
			p {
				font-family: 'Brandon Grotesque';
				text-transform: uppercase;
				font-size: 13px;
				padding: 0 10px;
				margin-bottom: 0;
				position: relative;
			}
			input{
				padding: 5px 10px;
				font-size: 14px;
				border: none;
				background-color: white;
				color: #363635;
				width: 300px;
				font-family: 'GT Walsheim';	
				border-radius: 3px;
			}
			textarea{
				width: 620px;
				font-family: 'GT Walsheim Light';
				font-size: 15px;
				padding: 10px;
				border: none;
				border-radius: 3px;
			}
			select{
				border: none;
				padding: 5px;
				margin-bottom: 20px;
			}
		}	
		.half{
			display: flex;
			justify-content: center;
		}
		.full{
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			input{
				width:621px;
			}
		}
		.radios{
			padding: 0 90px;
			margin-top: 30px;
			p {
				padding: 0;
			}
			label{
				display: inline-block;
				padding-left: 10px;
				padding-right: 100px;
			}
			input{
					display: inline-block;
					width: 20px;
					margin: 0;
					padding: 5px 0; 
					margin-left: 10px;
				}
		}
		.option{
			display: flex;
			align-items: center;
		}
			.btn {
			margin: 30px 0 0;
			border: none;
			border-radius: 3px;
			padding: 10px ;
			width: 40%;
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
</style>