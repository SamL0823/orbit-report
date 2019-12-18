import { Component, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // countType(satellites: Satellite[], type: string) {
  //   let total: number = 0;
  //   for (let i =0; i < satellites.length; i++) {
  //     if (satellites[i].type.toLowerCase() === type) {
  //       total+=1;
  //     }
  //   }
  //   return total;
  // }

  

}

