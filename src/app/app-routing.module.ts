import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components routing
import { LoginComponent } from './login-component/login-component.component';
import { ManagementComponent } from './management-component/management-component.component';
import { WeatherListComponent } from './weather-list-component/weather-list-component.component';
import { WeatherDetailComponent } from './weather-detail-component/weather-detail-component.component';


const routes: Routes = [
  {path:'home', component: LoginComponent },
  {path:'management', component: ManagementComponent},
  {path:'weather-list', component: WeatherListComponent},
  {path:'weather-detail', component: WeatherDetailComponent},
  {path:'**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
