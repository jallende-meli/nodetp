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
import {ReactiveFormsModule} from '@angular/forms';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SavedAgenciesComponent} from './saved-agencies/saved-agencies.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AgenciesformComponent,
    NavBarComponent,
    SavedAgenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    HttpClient,
    ApiService,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
