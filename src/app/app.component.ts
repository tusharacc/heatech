import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heatech';

  moveToTop(){
    window.scrollTo({top:0, behavior:'smooth'});
  }

  @HostListener("window:scroll", ['$event']) 
  onWindowScroll($event) {
    // do some stuff here when the window is scrolled
    //console.log("Scrolling",$event);
    //document.getElementById('back-to-top').style.display = "inline";
  }

  getCSSClasses() {
    let cssClasses;
    console.log(window.scrollY);
    if (window.scrollY == 0){
      return 'disable';
    } else {
      return 'enable';
    }
  }	
}
