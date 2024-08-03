import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { authInterceptorProvider } from './service/auth.interseptor';
import { DashbordComponent } from './page/dashbord/dashbord.component';
import { SidebarComponent } from './page/sidebar/sidebar.component';
import { UserdashboardComponent } from './page/userdashboard/userdashboard.component';
import { AddexpenseComponent } from './page/addexpense/addexpense.component';
import { ExpenseService } from './service/expense.service';
import { EditExpenseComponent } from './page/edit-expense/edit-expense.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashbordComponent,
    SidebarComponent,
    UserdashboardComponent,
    AddexpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [authInterceptorProvider,ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
