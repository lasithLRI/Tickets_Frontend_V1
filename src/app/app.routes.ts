import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home', loadComponent:()=>import('./HomePage/home/home.component').then(c=>c.HomeComponent)},
  {path:'config', loadComponent:()=>import('./HomePage/configurations-page/configurations-page.component').then(c=>c.ConfigurationsPageComponent)},
  {path:'dashboard', loadComponent:()=>import('./HomePage/dashboard/dashboard.component').then(c=>c.DashboardComponent)},

];
