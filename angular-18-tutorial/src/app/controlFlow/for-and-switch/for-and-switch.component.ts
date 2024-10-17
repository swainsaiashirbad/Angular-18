import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-and-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-and-switch.component.html',
  styleUrl: './for-and-switch.component.css'
})
export class ForAndSwitchComponent {

  dayNumber:string=''

  city:string []=["Mumbai","Bhubaneswer","Pune","Delhi"]

student:any []=[
  {studId:1,name:"sai" , city:"Bhubaneswer", isActive:false},
  {studId:2,name:"Jyothi" , city:"Bengaluru", isActive:true},
  {studId:3,name:"Badal" , city:"Jajpur", isActive:false},
  {studId:4,name:"Biswa" , city:"Jatani", isActive:false}
]
}
