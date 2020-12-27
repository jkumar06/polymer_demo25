import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-localstorage/iron-localstorage.js';
import '@polymer/iron-form/iron-form.js';



class register extends PolymerElement{
		
	static get template(){	
		return html `
		<link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<style>
			*{box-sizing:border-box;}
			html,body {margin: 0; padding: 0;}

			.container {
				margin: 10px 50px;
			}
			.form-group {
				margin:10px;
			}
			input {
                width: 70%;
                border: solid 1px #eee;
				padding: 11px 10px;
				margin-bottom: 15px;
				
			}
			button {
				width: 200px;
				padding: 15px;
				margin-left: 250px;
				background: none;
				outline: none;
				color: dodgerblue;
				border: solid 1px dodgerblue;
                cursor: pointer;
                border-radius: 33px;
                transition:all .38s ease-in-out;
            }
            button:hover {
                background: dodgerblue;
                color: fff;
			}
			table tr td {
				border: solid 1px #ccc;
				padding: 10px;
			}

		</style>
		<iron-localstorage name="my-app-storage"
		value="{{patientInfo}}"
		on-iron-localstorage-load-empty="initializeDefaultPatientInfo">
		</iron-localstorage>
		  <body>
		  <div class="container">
			  <h3>Patient Registration</h3>
			  <!--<iron-form>-->
			  <!--<form is = "iron-form" id = "patientform"  name="patientform">-->
				  <div class="mdl-grid">
				  <div class="mdl-cell mdl-cell--6-col">
				 
				  <input type="text" name="fname" id="fname" value ="" placeholder="Name" required>
				  <div id="div1" style="color:red;"></div>
				  </div>
				  <div class = "mdl-cell mdl-cell--6-col">
				  <input type="text" name="address" id="address" value="" placeholder="Address" required>
				  <div id="div2" style="color:red;"></div>
				  </div>
				  <div class = "mdl-cell mdl-cell--6-col">
				  <input type="email" name="email" id="email" placeholder="Email" required>
				  <div id="div3" style="color:red;"></div>
				  </div>
				  <div class = "mdl-cell mdl-cell--6-col">
				  <input type="phone" name="phone" id="phone" value="" placeholder="Number" required>
				  <div id="div4" style="color:red;"></div>
				  </div>
				  <div class = "mdl-cell mdl-cell--4-col">
				  <input type="submit" on-click="addpatient">
					
				  </div>
				  <!--</iron-form>-->
			  <!--</form>-->
			  <h3>Registered Data</h3>
		
			<table style="width:90%">
				<tr>
				   
					<th>Name</th>
					<th>Address</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
				<template is="dom-repeat" items="{{existingEntries}}">
				<tr class="item">
					<td class="mdl-data-table__cell--non-numeric">{{item.0}}</td>
					<td class="mdl-data-table__cell--non-numeric">{{item.1}}</td>
					<td class="mdl-data-table__cell--non-numeric">{{item.2}}</td>
					<td class="mdl-data-table__cell--non-numeric">{{item.3}}</td>
					
			    </tr>
				</template>
			</table>
		  </div>
	  </body>
		`;
	}

	static get properties() {
		return {
		  patientInfo: { type: Object },
		  patlist : {
			type: Array,
			value: function() { return []; }
		  },
		  existingEntries: {
			type: Array,
			value: function() { return []; }
		}
		}
	  }
	
	  initializeDefaultPatientInfo() {
		this.patientInfo = {
		  name: "",
		  address: "",
		  email: "",
		  number: ""
		}
	}

	addpatient() {
			this.set('isDataExists', true);
			this.set('patientInfo.name', this.$.fname.value);
			this.set('patientInfo.address', this.$.address.value);
			this.set('patientInfo.email', this.$.email.value);
			this.set('patientInfo.number', this.$.phone.value);
			window.localStorage.setItem("patientInfo", JSON.stringify(this.patientInfo));
			this.existingEntries.push(JSON.parse(window.localStorage.getItem('patientInfo')));
			console.log('existing Entries: ', this.existingEntries);
			this.existingEntries = JSON.parse(window.localStorage.getItem('All-Entries'));
	  }
	// addemp () {
	// 	if(typeof(Storage) !== "undefined") {
	// 		var fname = this.$.fname.value;
	// 		var address = this.$.address.value;
	// 		var email = this.$.email.value;
	// 		var phone = this.$.phone.value;
	
	// 		if(fname == "") {
	// 			 //alert("Name must be filled out");
	// 			 this.$.div1.innerHTML = "Name must be filled out";
	// 			 this.$.div1.style.display = "block";
	// 			 return false;
	// 		 } else {
	// 			 this.$.div1.style.display = "none";
	// 		 }
	// 		 if (address == "") {
	// 			 this.$.div1.style.display = "none";
	// 			 this.$.div2.innerHTML = "Address must be filled out";
	
	// 		 } else {
	// 			 this.$.div2.style.display = "none";
	// 		 }
	// 		 if (email == "") {
	// 			 this.$.div3.innerHTML = "Email must be filled out";
	
	// 		 } else {
	// 			 this.$.div3.style.display = "none";
	// 		 }
	// 		 if (phone == "") {
	// 			this.$.div4.innerHTML = "Phone Nummber must be filled out";
	
	// 		} else {
	// 			this.$.div4.style.display = "none";
	// 		}
	// 		if (fname != "" && address != "" && email != "" && phone != "") {

    //             var existingEntries = JSON.parse(localStorage.getItem("All-Entries"));
    //             if (existingEntries == null) existingEntries = [];
    //             var patlist = [];
    //             var slno = existingEntries.length + 1;
    //             //console.log(slno);
    //             patlist.push(slno, fname, address, email, phone)
    //             window.localStorage.setItem('Current-Entry-List', JSON.stringify(patlist));
    //             existingEntries.push(patlist);
            //     window.localStorage.setItem("All-Entries", JSON.stringify(existingEntries));
            //     window.alert("Patient Added Sucessfully");

            //     this.$.patientform.reset();
            //     //window.onload('/add-employee');

            // }
// 		let formData = {
// 			fname: document.getElementById("fname").value,
// 			address: document.getElementById("address").value,
// 			email: document.getElementById("email").value,
// 			phone: document.getElementById("phone").value,
// 		}
// 		localStorage.setItem("formData",JSON.stringify(formData));
// 		console.log(localStorage.getItem('formData'));
// 		e.preventDefault();
// 	}
// }
// 	 dispData() {

// 		//console.log(JSON.parse(localStorage.getItem("formData")));
// 			if(localStorage.getItem('formData')) {

// 		let {fname,address,email,phone} = JSON.parse(localStorage.getItem('formData'));
// 		var output = document.getElementById("output");
// 		output.innerHTML = `
// 		<table>
// 			<tbody>
// 				<tr>
// 					<td>Name</td>
// 					<td>${fname}</td>
// 				</tr>
// 				<tr>
// 					<td>Address</td>
// 					<td>${address}</td>
// 				</tr>
// 				<tr>
// 					<td>Email</td>
// 					<td>${email}</td>
// 				</tr>
// 				<tr>
// 					<td>Phone</td>
// 					<td>${phone}</td>
// 				</tr>
// 			</tbody>
// 		</table>
// 		`
 	}
//  }
// }

customElements.define('register-element',register);