import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:  [ DataService ]
})
export class ProductsComponent implements OnInit {

  urls: Array<string>
  
  constructor (private service: DataService){}

  ngOnInit(){
    this.service.getImages().subscribe(data => {
      //console.log(data)
      this.urls = data['filenames']
    });
    //this.service.getImages();
  }

}
