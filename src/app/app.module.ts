import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
