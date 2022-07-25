import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserType } from './app.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user:UserType = {} as UserType;

  private data$ = new BehaviorSubject<UserType>({} as UserType);

  constructor() {

    setTimeout(() => {
      const tempUser = {
        username: 'angular',
        email: 'angular@app.com',
        city: 'riyadh'
      };
      this.setData(tempUser);
    },5000);
   }

  getData(){
    return this.data$;
  }

  setData(user:UserType){
    this.user = user;
    this.data$.next(user);
  }


}
