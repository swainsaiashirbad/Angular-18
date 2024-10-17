import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../na.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    TitleCasePipe,
    JsonPipe,
    NaPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name:string="sai ashirbad swain"
  date:Date=new Date();

  object:any={
    name:"sai",
    city:"bhubaneswwer",
    age:25,
    ph:""
  }
}
