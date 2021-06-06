import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWeidgetMainComponent } from './Components/weather-weidget-main/weather-weidget-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWeidgetMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
