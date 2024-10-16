import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { LogOutComponent } from './routing/log-out/log-out.component';
import { ServicesComponent } from './routing/services/services.component';

export const routes: Routes = [
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
    }
];
