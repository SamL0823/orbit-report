import { Component } from '@angular/core';
import { Satellite } from './satellite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

        let fetchedSatellites = data.satellites;
        for (let i = 0; i < fetchedSatellites.length; i++) {
          let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate,
             fetchedSatellites[i].orbitType, fetchedSatellites[i].operational ); 
               
                       
             this.sourceList.push(satellite);
             
        }
       this.displayList = this.sourceList.slice(0);
      }.bind(this));    
    }.bind(this));
    
    
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
 }
  
//   search(orbitInput: string, typeInput: string): void {
//     let firstMatch: Satellite[] = [];
//     let matchingSatellites: Satellite[] = [];
//     let typeCount: number =0;
//     orbitInput = orbitInput.toLowerCase();
//     typeInput = typeInput.toLowerCase();
//     for(let i=0; i < this.sourceList.length; i++) {
//        let orbitType = this.sourceList[i].orbitType.toLowerCase();      
//        if (orbitType.indexOf(orbitInput) >= 0) {
//           firstMatch.push(this.sourceList[i]);

//        }       
//     }
//     for(let i=0; i < firstMatch.length; i++) {
//       let type = firstMatch[i].type.toLowerCase();
//       if(type.indexOf(typeInput)) {
//         matchingSatellites.push(firstMatch[i]);
//         typeCount+=1;
//     }
    
//     this.displayList = matchingSatellites;
//   }

// }







}
