import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  locations: Array<{}>;
  constructor() { }

  ngOnInit() {
    this.locations = [
      {line1:"Address: No:326, 3rd Main Road, Nehru Nagar ",
       line2: "OMR, Perungudi ",
       line3: "Chennai - 600096"}
    ]
  }

}
