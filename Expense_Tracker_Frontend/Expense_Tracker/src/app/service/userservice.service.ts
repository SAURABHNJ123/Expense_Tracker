import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

   //adduser function
   public adduser(user:any){
        return this.http.post(`${url}/user/register`,user);
   }

}
