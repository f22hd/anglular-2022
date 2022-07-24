import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class DataService {

  url:string = 'http://universities.hipolabs.com/search?country=Saudi+Arabia';

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }


}
