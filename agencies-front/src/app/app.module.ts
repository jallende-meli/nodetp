import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MaterialModule} from './material.module';
import {ApiService} from './services/services.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgenciesformComponent} from './agenciesform/agenciesform.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AgenciesformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClient,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
