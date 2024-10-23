import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
  this.service.roleSubject$.subscribe((role:string)=>{
    this.role=role
  })
  this.service.roleBhevaiourSubject.subscribe((role1:string)=>{
    this.role1=role1
  })
  }

  private service=inject(UserServiceService)
  role:string=''
  role1:string=''


}
