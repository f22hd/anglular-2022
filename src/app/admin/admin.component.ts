import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnChanges,OnDestroy {

  @Input() value:number = 0;
  @Output() onClick = new EventEmitter();

  constructor() {
    console.log('constructor');
   }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  clickMe(){
    this.onClick.emit();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
