import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  imageUrl = "assets/images.json"
  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get(this.imageUrl);
  }
}
