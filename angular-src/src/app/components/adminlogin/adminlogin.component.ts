import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    //If login is success 
    this.router.navigate(['manage']);
  }
}
