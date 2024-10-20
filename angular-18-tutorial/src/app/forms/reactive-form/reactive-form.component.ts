import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { variationPlacements } from '@popperjs/core';
import { AlertComponent } from "../../API/get-api/reusableComponent/alert/alert.component";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, AlertComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  formValue:any;

  formObject:FormGroup=new FormGroup(
    {
      firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl(""),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl(""),
      city: new FormControl(""),
      isAgreed: new FormControl(false,[Validators.required])

    }
  )

  subbmit(){
    this.formValue=this.formObject.value
  }
}
