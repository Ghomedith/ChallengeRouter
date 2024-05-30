import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';


export const  routes: Routes =[
    {path: 'user-profile',   component: UserProfileComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'menu',   component: MenuComponent},
    
   ];
   