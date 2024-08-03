import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
logout() {
this.login.logout();
this.router.navigate(['/login']);
}
constructor(private login:LoginService,private router:Router){}

  

}
