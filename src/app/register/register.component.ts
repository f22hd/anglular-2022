import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
      birthDay: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      agreement: new FormControl('',[Validators.required,Validators.requiredTrue]),
    });


    this.form.valueChanges.subscribe(values => {
      console.log(values);
      console.log(this.form);
    })


  }

  submitForm(){
    if(!this.form.valid){
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);

  }

}
