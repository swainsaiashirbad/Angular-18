import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../../API/get-api/reusableComponent/alert/alert.component";
import { UserConst } from '../../constants/userConst';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TEmplateFormComponent {

  Validation={
    required:UserConst.VALIDATION_MESSAGE.REQUIRED,
    minLength:UserConst.VALIDATION_MESSAGE.MIN_LENGTH
  }

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
