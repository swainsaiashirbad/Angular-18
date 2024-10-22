import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { LogOutComponent } from './routing/log-out/log-out.component';
import { ServicesComponent } from './routing/services/services.component';
import { IfElseComponent } from './controlFlow/if-else/if-else.component';
import { ForAndSwitchComponent } from './controlFlow/for-and-switch/for-and-switch.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsComponent } from './forms/forms/forms.component';
import { TEmplateFormComponent } from './forms/template-form/template-form.component';
import { GetAPIComponent } from './API/get-api/get-api.component';
import { NgTempComponent } from './ngTemplate/ng-temp/ng-temp.component';
import { LoginComponent } from './login/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [

    {
        path:"",
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"layout",
        component:LayoutComponent,
        children:[
            {
                path:"home",
                component:HomeComponent
            },
            {
                path:"about",
                component:AboutComponent
            },
            {
                path:"logOut",
                component:LogOutComponent
            },
            {
                path:"services",
                component:ServicesComponent
            },
            {
                path:"ifElse",
                component:IfElseComponent
            },
            {
                path:"forAndSwitch",
                component:ForAndSwitchComponent
            },
            {
                path:"pipes",
                component:PipesComponent
            },
            {
                path:"reactiveForm",
                component:ReactiveFormComponent
            },
            {
                path:"forms",
                component:FormsComponent
            },
            {
                path:"templateForm",
                component:TEmplateFormComponent
            },
            {
                path:"getAPI",
                component:GetAPIComponent
            },
            {
                path:"ngTemp",
                component:NgTempComponent
            }

        ]
    }


];
