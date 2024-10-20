import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';


@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {


  private http= inject(HttpClient)
  private userService=inject(UserServiceService)

  users:any

  getApiCall(){
   this.userService.getAllUser().subscribe((res:any)=>{
    this.users=res
   })
  
  }
}
