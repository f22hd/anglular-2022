import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { University } from '../app.type';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges,OnDestroy {

  @Input() value:number = 0;
  @Input() add:number = 0;
  @Output() onClick = new EventEmitter<number>();

  data:University[] = [];

  constructor(private dataService:DataService) {

  }


  async ngOnInit() {
    console.log('ngOnInit');
    this.data = await this.dataService.getData().toPromise() as University[];
    this.data = this.data.map(obj => {
      obj.stateProvince = obj['state-province'];
      return obj;
    })
  }



  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges',changes);
  }

  sendData(){
    this.onClick.emit(this.value);
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy',this.value);
  }
}
