import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StartComponent } from './routes/start/start.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopbarComponent } from './components/topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SidenavComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
