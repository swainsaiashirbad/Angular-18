import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private URL:string="http://localhost:8080/"

  private http=inject(HttpClient)
  constructor() { }

  getAllUser(){
  return  this.http.get(this.URL+"users")
  }

  createAllUser(){
    return  this.http.post(this.URL+"users",null)
    }
}
