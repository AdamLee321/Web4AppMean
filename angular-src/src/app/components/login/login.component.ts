import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router }            from '@angular/router';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];
  growlmsgs: Message[] = [];
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Login component initialized...");
  }

  onLoginSubmit(){
    console.log("user submit button pushed");
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      //console.log(data);
      if(this.username == undefined || this.password == undefined){
        this.msgs.push({severity:'error', summary:'Error', detail:'Please fill in all fields.'});
      } else{
        if(data.success){
          this.authService.storeUserData(data.token, data.user);
          this.growlmsgs.push({severity:'success', summary:'Welcome' + user.username});
          this.router.navigate(['dashboard']);
        } else{
          this.growlmsgs.push({severity:'error', summary:data.msg});
          this.msgs.push({severity:'error', summary:'Error:', detail:'Please enter valid credentials.'});
          this.router.navigate(['login']);
        }
      }
    });
  }

}
