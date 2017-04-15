import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router }            from '@angular/router';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  msgs: Message[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.msgs.push({severity:'info', summary:'Info:', detail:'You have successfully logged out.'});
    this.router.navigate(['/login']);
    return false;
  }
}
