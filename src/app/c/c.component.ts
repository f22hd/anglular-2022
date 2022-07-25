import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  city:string  = '';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe(user => {
      this.city = user.city;
    });
  }

}
