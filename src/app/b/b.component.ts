import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  email:string  = '';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe(user => {
      this.email = user.email;
    });
  }

}
