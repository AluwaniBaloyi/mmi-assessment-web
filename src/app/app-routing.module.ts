import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ViewDetailsComponent} from "./components/view-details/view-details.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
   {
      path: '',
      component: DashboardComponent,
      canActivate: [AuthGuard]
   },
   {
     path: 'details',
     component: ViewDetailsComponent,
     canActivate: [AuthGuard],
   },
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'register',
      component: RegisterComponent
   },

   { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
