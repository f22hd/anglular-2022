import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  title:string = 'Fahad';
  isVisible:boolean = true;

  numbers:number[] = [1,2,3,4,5,6,7];

  constructor(private userService:UserService){

  }

  updateUserData(){
    this.userService.setData({
      username:'javascript',
      email:'javascript@javascript.app',
      city:'Abha'
    })
  }




  toggle(){
    this.isVisible = !this.isVisible;
  }

  clickMe(){
    this.updateName();
  }

  private updateName(){
    this.title = 'Ahmed';
  }

  print(value:number){
    this.numbers = this.numbers.filter(item =>{
      return item !== value;
    });
  }

  showAlert(){
    alert("Hi");
  }

}
