import { Component } from '@angular/core';
import{UserserviceService} from '../../service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector:'app-signup',
  templateUrl:'./signup.component.html',
  styleUrl:'./signup.component.css'
})
export class SignupComponent {

  constructor(private userservice:UserserviceService){
        
  }

     public user={
        username:'',
        password:'',
        email:'',
      };

      formSubmit(){
        console.log(this.user);
        if(this.user==null || this.user.username=='' || this.user.email=='' || this.user.password==''){
          Swal.fire("User required");
            return;
        }
        
        this.userservice.adduser(this.user).subscribe(
         {
          next:(data)=>{
            console.log(this.user);
            console.log(data);
            Swal.fire("Data Submited");
          },
          error:(error)=>{
            console.log(this.user);
            console.log(error);
            Swal.fire("Somthing went wrong");
          }
         }
        );

      }

}
