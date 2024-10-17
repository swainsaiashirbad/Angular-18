import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  div1IsVisible:boolean=true
  div2IsVisible:boolean=true
  num1:string=''
  num2:string=''
  dropdewnValue:string=""

  hide(){
    this.div1IsVisible=false
  }
  show(){
    this.div1IsVisible=true
  }
  showHide(){
    this.div2IsVisible=!this.div2IsVisible
  }
}
