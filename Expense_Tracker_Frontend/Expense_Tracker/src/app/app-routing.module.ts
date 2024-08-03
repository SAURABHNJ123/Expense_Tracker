import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import { DashbordComponent } from './page/dashbord/dashbord.component';
import { UserdashboardComponent } from './page/userdashboard/userdashboard.component';
import { AddexpenseComponent } from './page/addexpense/addexpense.component';

const routes: Routes = [{ 
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'dashboard',
  component:DashbordComponent,
  children:[{
    path:"",
    component:UserdashboardComponent,
  }, 
  {
    path:"add-expense",
    component:AddexpenseComponent,
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
