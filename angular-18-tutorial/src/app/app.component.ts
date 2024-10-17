import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IfElseComponent } from './controlFlow/if-else/if-else.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,IfElseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-tutorial';
}
