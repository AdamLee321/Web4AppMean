import { Component, OnInit }  from '@angular/core';
import { ValidateService }    from '../../services/validate.service';
import { AuthService }        from '../../services/auth.service';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';
import { Router }             from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  growlmsgs: Message[] = [];
  msgs: Message[] = [];
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Register component initialized...");
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    //Required Fields
    if(!this.validateService.validateRegister(user)){
      console.log("Please fill in all fields");
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Please fill in all fields'});
      return false;
    }
    //Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Please use a valid email'});
      return false;
    }
    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.growlmsgs.push({severity:'success', summary:'You are now registered and can log in'});
        //this.router.navigate(['/login']);
      } else{
        this.growlmsgs.push({severity:'error', summary:'Oops! Something went wrong! Please try again.'});
        this.router.navigate(['/register']);
      }
    });
  }
}
