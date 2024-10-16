import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,StructuralDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-tutorial';
}
