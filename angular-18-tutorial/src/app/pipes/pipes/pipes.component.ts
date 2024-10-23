import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NaPipe } from '../na.pipe';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    TitleCasePipe,
    JsonPipe,
    NaPipe,
    CommonModule
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {
  

  private service=inject(UserServiceService)
  role:string=''
  role1:string=''
  ngOnInit(): void {
   this.service.roleSubject$.subscribe((role:string)=>{
    this.role=role
   })
   this.service.roleBhevaiourSubject.subscribe((role1:string)=>{
    this.role1=role1
   })
  }

  name:string="sai ashirbad swain"
  date:Date=new Date();

  object:any={
    name:"sai",
    city:"bhubaneswwer",
    age:25,
    ph:""
  }
}
