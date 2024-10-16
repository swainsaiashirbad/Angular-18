import { Component, NgModule, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName="angular"

  name=signal("sai")

  changeCourseName(){
    this.courseName="react js"
    this.name.set("Jyothi")
  }

  
}
