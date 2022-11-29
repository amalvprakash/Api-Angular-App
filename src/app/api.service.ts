import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  productList = ()=> {
    return this.http.get("https://dummyjson.com/products")
  }
  publicApi = () => {
    return this.http.get("https://api.publicapis.org/entries")
  }
  quotes = () => {
    return this.http.get("https://dummyjson.com/quotes")
  }
  toDo = () => {
    return this.http.get("https://dummyjson.com/todos")
  }
  usPublic = () => {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }
  userData = () => {
    return this.http.get("https://dummyjson.com/users")
  }
  userInfo = () => {
    return this.http.get("https://reqres.in/api/users?page=1")
  }
  viewPassenger = () => {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }
}
