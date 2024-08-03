import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logindata={
    username:"",
    password:""
  };

  constructor(private login:LoginService,private router:Router){};

  public formSubmit(){
      
    if(this.logindata.username.trim()=='' || this.logindata.username==null){
      alert("plese enter username");
      return;
    };
    if(this.logindata.password.trim()=='' || this.logindata.username==null){
      alert("plese enter Password");
      return;
    };

    //request to genrate token to the server

    this.login.genratetoken(this.logindata).subscribe({
      next:(data:any)=>{
        console.log("sucsses...");
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
        (user:any)=>{
           this.login.setUser(user);
           window.location.href="/dashboard"
        }
        )
   },
   error:(error)=>{
    alert("Invalid Creadential");
  console.log(error);
}

  });
    

  }


}
