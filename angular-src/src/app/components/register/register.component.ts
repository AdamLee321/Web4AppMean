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
  phone: String;
  password: String;
  role: Number = 1;

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
      phone: this.phone,
      username: this.username,
      password: this.password,
      role: this.role
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
    //Validate Number
    if(!this.validateService.validatePhone(user.phone)){
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Please use a valid phone'});
      return false;
    }
    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.growlmsgs.push({severity:'success', summary:'You are now registered and can log in'});
        //this.router.navigate(['/login']);
        this.resetForm();
      } else{
        this.growlmsgs.push({severity:'error', summary:'Oops! Something went wrong! Please try again.'});
        this.router.navigate(['/register']);
      }
    });
  }

  resetForm(){
    this.name = '';
    this.email = '';
    this.phone = '';
    this.password = '';
    this.username = '';
  }
}
