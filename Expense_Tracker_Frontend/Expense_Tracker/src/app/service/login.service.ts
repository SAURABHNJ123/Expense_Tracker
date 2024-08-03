import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  url  from './helper';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //get current User
  public getCurrentUser(){
    return this.http.get(`${url}/current-user`);
  }

   
  public genratetoken(logindata:any){
        return this.http.post(`${url}/genrate`,logindata)
  }

  //loginUser:Set token to in localStorage
  
  public loginUser(token:any){
      localStorage.setItem("token",token);
      console.log(token);
      
      return true;
  }

  //islogin: user is login or not
  
  public islogin(){
    
   let tokenStr=localStorage.getItem("token");
     if (tokenStr==null || tokenStr=="" ||tokenStr==undefined) {
      return false;
     }else{
      return true;
     }
  }

  //logout: to remove token from local storage
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
    
  }

  //getToken: get token 
  public getToken(){
    return localStorage.getItem("token");
  }

  //setUser: set userDetails
  public setUser(user:any){
    console.log(JSON.stringify(user));
    localStorage.setItem("user",JSON.stringify(user));
  }

  //getUser: get userDetails
  public getUser(){
   let userStr=localStorage.getItem("user");
   if(userStr!=null){
    return JSON.parse(userStr);
   }
   else{
    this.logout();
    return null; 
   }
 }

 //Get user role 
 public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
    
 }

}
