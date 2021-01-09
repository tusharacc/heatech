import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  left = faChevronLeft;
  right = faChevronRight;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(){
    this.router.navigate(['/','aboutus']);
  }

}
