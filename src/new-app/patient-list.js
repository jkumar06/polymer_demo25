import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';

class PatientList extends PolymerElement {
    static get template() {
        return html `
        <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
        <script src="/node_modules/material-design-lite/material.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style include="shared-styles">
            :host {
              display: block;
              padding: 10px;
            }
            
          </style>
    
          <div class="card">
            <h1>Patient Registered List</h1>
            
          </div>
         
          <div class="card">
          <div class="mdl-grid">
          <iron-ajax url="./src/patlist.json" last-response="{{item}}" auto> </iron-ajax>
                    <div class="table-responsive">
    
                        <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                              <thead>
                                <tr>
                                  <th scope="col" class="mdl-data-table__cell--non-numeric">S.No</th>
                                  <th scope="col" class="mdl-data-table__cell--non-numeric"> Name</th>
                                  <th scope="col" class="mdl-data-table__cell--non-numeric">Address</th>
                                  <th scope="col" class="mdl-data-table__cell--non-numeric">Email</th>
                                  <th scope="col" class="mdl-data-table__cell--non-numeric">Phone Number</th>
                                  <th scope="col" class="mdl-data-table__cell--non-numeric">Action</th>
    
                                </tr>
                              </thead>
                              <template is="dom-repeat" items="{{patlist}}" >
                
                              <tbody>
                                <tr class="item">
                                              <td class="mdl-data-table__cell--non-numeric">{{item.0}}</td>
                                              <td class="mdl-data-table__cell--non-numeric">{{item.1}}</td>
                                              <td class="mdl-data-table__cell--non-numeric">{{item.2}}</td>
                                              <td class="mdl-data-table__cell--non-numeric">{{item.3}}</td>
                                              <td class="mdl-data-table__cell--non-numeric">{{item.4}}</td>
                                              <td><button type="submit" 
                                                  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
                                                  on-click="delete" > Delete </button> </td>
  
                                        </tr>
                                        
                              </tbody>
                  </template>
                            </table> 
                  </div>
                  </div>
        </div>    
    `;
    }
    ready() {
        super.ready();
        this.patlist = JSON.parse(window.localStorage.getItem('All-Entries'));
       

    }
    delete(e) {
        var data = JSON.parse(window.localStorage.getItem('All-Entries'));
        console.log('data', );
        var xxx = data.splice(1, 1);
        console.log(xxx);
        window.localStorage.setItem("All-Entries", JSON.stringify(xxx));
  }
}

window.customElements.define('patient-list', PatientList);