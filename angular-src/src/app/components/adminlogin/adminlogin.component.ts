import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router }            from '@angular/router';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
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
      if(this.username == undefined || this.password == undefined ){
        this.msgs.push({severity:'error', summary:'Error', detail:'Please fill in all fields.'});
      } else{
        if(data.success){
          this.authService.storeUserData(data.token, data.user);
          this.growlmsgs.push({severity:'success', summary:'Welcome' + user.username});
          this.router.navigate(['manage']);
        } else{
          this.growlmsgs.push({severity:'error', summary:data.msg});
          this.msgs.push({severity:'error', summary:'Error:', detail:'Please enter valid credentials.'});
          this.router.navigate(['/admin']);
        }
      }
    });
  }

  MessageLogin(response){
      console.log('Post Finished');
      if(response == 'customer'){
        this.router.navigate(['/profile']);
      }
      else if(response == 'admin'){
        this.router.navigate(['/admin/manage']);
      }
      else if(response == 'Login Failed'){
        this.msgs.push({severity:'error', summary:'Error:', detail:'Please enter valid credentials.'});
      }
      else if(response == 'Login Successful Secretary'){
        this.router.navigate(['secretary/dashboard']);	
    }
  }
}