import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserConst } from '../constants/userConst';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  roleSubject$:Subject<string>=new Subject();
  
  roleBhevaiourSubject:BehaviorSubject<string>=new BehaviorSubject("")

  private http=inject(HttpClient)
  constructor() { }

  getAllUser(){
  return  this.http.get(UserConst.GET_ALL_DATA_URL+"users")
  }

  createAllUser(){
    return  this.http.post(UserConst.GET_ALL_DATA_URL+"users",null)
    }
}
