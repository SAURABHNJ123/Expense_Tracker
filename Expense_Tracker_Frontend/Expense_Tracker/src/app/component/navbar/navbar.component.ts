import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   isLogin=false;
   user:any;

  constructor(public login:LoginService,private router:Router){}

  ngOnInit(){
    this.isLogin=this.login.islogin();
    this.user=this.login.getUser().fristName;
  }

  public logout(){
    console.log("logout call.....");
    this.login.logout();
   // this.login.loginStatusSubject.next(false);
    this.isLogin=false;
    this.user=null;
    this.router.navigateByUrl('/login');
  }

}
