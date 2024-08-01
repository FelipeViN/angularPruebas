import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: 'login', loadComponent:()=>import('./pages/login-page/login-page.component'),},
    {path: 'welcome', loadComponent:()=>import('./pages/welcome-page/welcome-page.component'),},
    {path: 'crud', loadComponent:()=>import('./pages/crud-page/crud-page.component'),},
    {path: 'crudAdd', loadComponent:()=>import('./pages/crud-add-page/crud-add-page.component'),},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];
