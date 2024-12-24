import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },


  {
    path: 'login',
    loadComponent: () =>
      import('./Components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Components/register/register.component').then((m) => m.RegisterComponent),
  },
  


  {
    path: '', 
    component: LayoutComponent, 
    children: [
      {
        path: 'homepage',
        loadComponent: () =>
          import('./Components/Homepage/Homepage.component').then((m) => m.HomepageComponent),
      },
      {
        path: 'employees',
        loadComponent: () =>
          import('./Components/employees/employees.component').then((m) => m.EmployeesComponent),
      },
      {
        path:'profile',
        loadComponent:() => 
            import('./Components/profile/profile.component').then((m)=>m.ProfileComponent),
      }
    ]
  },
 
  
]
    
      
