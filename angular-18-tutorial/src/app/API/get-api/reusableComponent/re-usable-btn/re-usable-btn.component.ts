import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-re-usable-btn',
  standalone: true,
  imports: [],
  templateUrl: './re-usable-btn.component.html',
  styleUrl: './re-usable-btn.component.css'
})
export class ReUsableBtnComponent {

@Input()  btnData:string=''
 
@Input() btnClasss=""

@Output() myBtnClick=new EventEmitter<any>()

onClick(){

  this.myBtnClick.emit("reusable btn clicked")
}
}
