import { Component, OnInit } from '@angular/core';
import { University } from '../app.type';
import { DataService } from '../data.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

  data:University[] = [];

  constructor(private dataService:DataService) {}


  async ngOnInit() {
    console.log('ngOnInit');
    this.data = await this.dataService.getData().toPromise() as University[];
    this.data = this.data.map(obj => {
      obj.stateProvince = obj['state-province'];
      return obj;
    })
  }


}
