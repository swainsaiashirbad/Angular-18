import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  courseName=signal("java")
  courseName2:string="HTMl"

  firstName=signal("sai")
  lastName=signal("ashirbad")

  fullName= computed(()=>{
  return  this.firstName()+" "+ this.lastName()
  })

  cityList=signal(["Mumbai","Pune"])

  UserObj=signal({
    name:"sai",
    age:25
  })

  constructor(){
    setTimeout(()=>{
        this.courseName.set("Angular")
        this.courseName2="CSS"
    },5000)
  }

  changeFirstName(){
    this.firstName.set("Ediga")
  }
  changelastName(){
    this.lastName.set("Jyothi")
  }

  addCity(){
    this.cityList.set([...this.cityList(),"Bhubaneswar"])
  }
  changeAge(){
   this.UserObj.set({...this.UserObj(),age:26})
  }

}
