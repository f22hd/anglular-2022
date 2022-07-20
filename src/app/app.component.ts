import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title:string = 'Fahad';
  isVisible:boolean = true;

  numbers:number[] = [1,2,3,4,5,6,7];

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
