import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private router = inject(Router)
  username: string = ''

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

}
