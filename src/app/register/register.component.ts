import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      agreement: new FormControl('',[Validators.required,Validators.requiredTrue])
    });


  }


  submitForm(){
    console.log(this.form.value);
  }

}
