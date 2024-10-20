import { Component } from '@angular/core';
import { ReUsableBtnComponent } from "../../API/get-api/reusableComponent/re-usable-btn/re-usable-btn.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReUsableBtnComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  getData(){
    alert("btn clicked by reusable btn componant")
  }
}
