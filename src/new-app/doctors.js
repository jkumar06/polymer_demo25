import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';

class doctorsList extends PolymerElement{

	
	static get properties() {
		
	}
	static get template(){
		
		return html `
			<style>
			body{
				margin: 0;
				padding: 0;
				background: #544577ba;
			}
			.container {
				margin: auto 20px;
				display: block;
			}
			
			.card{
				background: whitesmoke;
				padding: 20px 0;
				padding-top: 0;
				width: 35%;
				float: left;
				margin: 20px;
				border-radius: 10px;
			}
			.card-title{
				margin: 0;
				text-align: center;
			}
			
			.card:hover {
				cursor: pointer;
				box-shadow: 0 0 5px black;
				transform: scale(1.1);
				transition: 2s;
			}
			
			a{
				text-decoration: none;
				color: black;
			}
			
			</style>
			<p style="font-size: 35px; text-align: center">Specialization Category</p>
			<div class="container">
			<div class="row">
				<div class="card">
				<a href="consult.html">
				<img src="./src/new-app/assets/Physician.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
					<p class="card-title">Pediactrician</p>
				</a>	
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Physician.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Physician</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Gynaecologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Gynaecologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Dermatologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Dermatologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Orthopedician.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Orthopedician</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Cardiologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Cardiologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Surgeon.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title"> Surgeon</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Oncologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Oncologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Urologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Urologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Dentist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Dentist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Psychiatrist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Psychiatrist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Psychiatrist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Physiotherapist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Pediactrician.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Pediactrician</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Ophtalmologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Ophtalmologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Immunology.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Immunology</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Pediatrics.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Pediatrics</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Surgery.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Surgery</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/new-app/assets/Radiology.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Radiology</p>
					</a>
				</div>  
			</div>
		</div>	
		`
	}
}
customElements.define('doctors-element', doctorsList);