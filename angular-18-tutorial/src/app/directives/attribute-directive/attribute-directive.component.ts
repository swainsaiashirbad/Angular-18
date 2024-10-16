import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor:string="bg-primary"

  isDiv2Active:boolean=false

  num1:string=""
  num2:string=""

  student:any []=[
    {studId:1,name:"sai" , city:"Bhubaneswer",marks:23, isActive:false},
    {studId:2,name:"Jyothi" , city:"Bengaluru",marks:65, isActive:true},
    {studId:3,name:"Badal" , city:"Jajpur",marks:97, isActive:false},
    {studId:4,name:"Biswa" , city:"Jatani",marks:45, isActive:false}
  ]

  addRedClass(){
    this.div1BgColor="bg-danger"
  }
  addBlueClass(){
    this.div1BgColor="bg-primary"
  }

  div2Toggle(){
    this.isDiv2Active=!this.isDiv2Active
  }
}
