import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TEmplateFormComponent {

  formObject:any=
  {
    firstName:"",
    lastName:'',
    email:"",
    password:"",
    isAgreed:false,
    city:""
  };

  formVAlue:any;
  subbmit(){
    this.formVAlue=this.formObject
  }
}
