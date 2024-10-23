import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserConst } from '../constants/userConst';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 

  private http=inject(HttpClient)
  constructor() { }

  getAllUser(){
  return  this.http.get(UserConst.GET_ALL_DATA_URL+"users")
  }

  createAllUser(){
    return  this.http.post(UserConst.GET_ALL_DATA_URL+"users",null)
    }
}
