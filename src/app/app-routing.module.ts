import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  //path setting for user defined component
  //login path
  {
    path:'',component:LoginComponent
  },
  //dashboard path
  {
    path:'dashboard',component:DashboardComponent
  },
  //register 
  {
    path:'register', component:RegisterComponent
  },
  //transaction
  {
    path:'transaction', component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
