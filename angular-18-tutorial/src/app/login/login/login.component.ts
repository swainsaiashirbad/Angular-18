import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private router=inject(Router)


  user:any={
    userName:'',
    password:''
  }

  login(){
    
    if(this.user.userName=="admin" && this.user.password=="1234"){

      this.router.navigateByUrl("/layout")
    }
    else{
      alert("Username or password incorect")
    }
   
  }

}
