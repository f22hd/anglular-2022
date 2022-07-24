import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { University } from '../app.type';
import { DataService } from '../data.service';

@Component({
  selector: 'app-universities-details',
  templateUrl: './universities-details.component.html',
  styleUrls: ['./universities-details.component.css']
})
export class UniversitiesDetailsComponent implements OnInit {

  data: University = {} as University;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    const list: University[] = await firstValueFrom(this.dataService.getData()) as University[];

    this.data = list.find(uni => uni.name.toUpperCase() === name?.toUpperCase()) as University;

  }

}
