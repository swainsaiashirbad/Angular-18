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
import { authGuard } from './service/auth.guard';

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
        canActivate:[authGuard],
        children:[
            {
                path:"home",
                component:HomeComponent,
                // canActivate:[authGuard]
            },
            {
                path:"about",
                component:AboutComponent ,
                // canActivate:[authGuard]
            },
            {
                path:"logOut",
                component:LogOutComponent,
                // canActivate:[authGuard]
            },
            {
                path:"services",
                component:ServicesComponent,
                // canActivate:[authGuard]
            },
            {
                path:"ifElse",
                component:IfElseComponent,
                // canActivate:[authGuard]
            },
            {
                path:"forAndSwitch",
                component:ForAndSwitchComponent,
                // canActivate:[authGuard]
            },
            {
                path:"pipes",
                component:PipesComponent,
                // canActivate:[authGuard]
            },
            {
                path:"reactiveForm",
                component:ReactiveFormComponent,
                // canActivate:[authGuard]
            },
            {
                path:"forms",
                component:FormsComponent,
                // canActivate:[authGuard]
            },
            {
                path:"templateForm",
                component:TEmplateFormComponent,
                // canActivate:[authGuard]
            },
            {
                path:"getAPI",
                component:GetAPIComponent,
                // canActivate:[authGuard]
            },
            {
                path:"ngTemp",
                component:NgTempComponent,
                // canActivate:[authGuard]
            }

        ]
    }


];
