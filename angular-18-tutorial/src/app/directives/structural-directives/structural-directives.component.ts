import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
isDivVisible:boolean=true
isDiv2IsVisible:boolean=true
num1:String=""
num2:String=""

isActive:boolean=false

selectedCountry:String=""

city:string []=["Mumbai","Bhubaneswer","Pune","Delhi"]

student:any []=[
  {studId:1,name:"sai" , city:"Bhubaneswer", isActive:false},
  {studId:2,name:"Jyothi" , city:"Bengaluru", isActive:true},
  {studId:3,name:"Badal" , city:"Jajpur", isActive:false},
  {studId:4,name:"Biswa" , city:"Jatani", isActive:false}
]


showDiv(){
  this.isDivVisible=true
}
hideDiv(){
  this.isDivVisible=false
}

toggle(){
  this.isDiv2IsVisible=!this.isDiv2IsVisible
}
}
