import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StartComponent } from './routes/start/start.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { sidenavReducer } from './store/sidenav/';
import { RezervationsComponent } from './routes/rezervations/rezervations.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SidenavComponent,
    TopbarComponent,
    RezervationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({ sidenav: sidenavReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
