import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerDataComponent } from './view-passenger-data/view-passenger-data.component';
import { UsPublicDataViewComponent } from './us-public-data-view/us-public-data-view.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes =[
  {
    path:"",
    component:ViewPassengerDataComponent
  },
  {
    path:"usPublic",
    component:UsPublicDataViewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerDataComponent,
    UsPublicDataViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
