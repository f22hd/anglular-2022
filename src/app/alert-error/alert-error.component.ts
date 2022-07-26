import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent implements OnInit, OnChanges {

  @Input() formControl:FormControl = new FormControl({});

  constructor() { }

  ngOnInit(): void {
    console.log(this.formControl);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }


}
