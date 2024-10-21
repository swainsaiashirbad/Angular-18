import { CommonModule } from '@angular/common';
import { Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-ng-temp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-temp.component.html',
  styleUrl: './ng-temp.component.css'
})
export class NgTempComponent {

  isUserLogged:boolean=false
  loggedUserName:string='sai'

@ViewChild('getMsg') getMsg?:ElementRef
  onClick(){

    console.log(this.getMsg?.nativeElement)
  }
}
