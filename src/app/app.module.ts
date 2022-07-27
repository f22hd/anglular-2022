import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversitiesDetailsComponent } from './universities-details/universities-details.component';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UniNotFoundComponent } from './uni-not-found/uni-not-found.component';
import { PrintDataPipe } from './print-data.pipe';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { RegisterComponent } from './register/register.component';


const routes:Routes = [
  {
    path:'universities',
    children:[
      {
        path: '',
        component: UniversitiesComponent,
      },
      {
        path:':name',
        component: UniversitiesDetailsComponent
      },
      {
        path: '**',
        component: UniNotFoundComponent
      }
    ]

  },

  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(r => r.RegisterModule)
  },

  {
    path: '',
    redirectTo:'universities',
    pathMatch:'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    UniversitiesComponent,
    NotFoundComponent,
    UniNotFoundComponent,
    UniversitiesDetailsComponent,
    PrintDataPipe,
    AComponent,
    BComponent,
    CComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
