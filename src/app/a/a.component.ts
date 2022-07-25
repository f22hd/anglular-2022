import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  username:string = '';

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getData().subscribe(user => {
      this.username = user.username;
    });
  }

}
