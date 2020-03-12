import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { ManagementComponent } from './management-component/management-component.component';
import { WeatherListComponent } from './weather-list-component/weather-list-component.component';
import { WeatherDetailComponent } from './weather-detail-component/weather-detail-component.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagementComponent,
    WeatherListComponent,
    WeatherDetailComponent,
    MenuLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
