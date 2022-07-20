import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges,OnDestroy {

  @Input() value:number = 0;
  @Input() add:number = 0;
  @Output() onClick = new EventEmitter<number>();

  constructor() { }


  ngOnInit(): void {
    console.log('ngOnInit');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes);
  }

  sendData(){
    this.onClick.emit(this.value);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy',this.value);
  }
}
