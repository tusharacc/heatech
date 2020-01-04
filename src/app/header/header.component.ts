import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuToggle: boolean = false;
  debug: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  debugInformation(src, message){
    if (this.debug){
      console.log(`value from point ${src} is ${message}`);
    }

  }

  toggleMenu(){
    this.debugInformation('before toggleMenu()',this.menuToggle)
    if (this.menuToggle){
      this.menuToggle = false
    } else {
      this.menuToggle = true
    }
    this.debugInformation('after toggleMenu()',this.menuToggle);
  }


}
