import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private router = inject(Router)
  private service=inject(UserServiceService)
  username: string = ''
  role:string=''

  constructor() {
    const localdata = localStorage.getItem('username')
    if (localdata != null) {

      this.username=JSON.parse(localdata)
    }
  }

  logout() {
    localStorage.removeItem('username')
    this.router.navigateByUrl("login")
  }

  pushData(){

    this.service.roleSubject$.next(this.role)
    this.service.roleBhevaiourSubject.next(this.role)
  }

}
