import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerDataComponent } from './view-passenger-data/view-passenger-data.component';
import { UsPublicDataViewComponent } from './us-public-data-view/us-public-data-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicApiViewComponent } from './public-api-view/public-api-view.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ToDoComponent } from './to-do/to-do.component';
import { QuotesComponent } from './quotes/quotes.component';

const myRoute:Routes =[
  {
    path:"",
    component:ViewPassengerDataComponent
  },
  {
    path:"usPublic",
    component:UsPublicDataViewComponent
  },
  {
    path:"publicView",
    component:PublicApiViewComponent
  },
  {
    path:"userInfo",
    component:UserinfoComponent
  },
  {
    path:"productList",
    component:ProductListComponent
  },
  {
    path:"userData",
    component:UserDataComponent
  },
  {
    path:"toDo",
    component:ToDoComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerDataComponent,
    UsPublicDataViewComponent,
    NavbarComponent,
    PublicApiViewComponent,
    UserinfoComponent,
    ProductListComponent,
    UserDataComponent,
    ToDoComponent,
    QuotesComponent
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
