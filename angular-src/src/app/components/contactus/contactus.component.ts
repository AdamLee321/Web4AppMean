import { Component, OnInit } from '@angular/core';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';
import { Contact }           from '../../_models/Contact';
import { ContactService }    from '../../services/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  growlmsgs: Message[] = [];
  contacts: Contact[] = [];
  data: any[];
  name: String;
  email: String;
  description: String;
  subject: String;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmitContact(){
    const contact = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      description: this.description,
    }
      console.log(contact);
      this.contactService.addContact(contact).subscribe(data => {
      if(data.success){
        this.growlmsgs.push({severity:'success', summary:'Your Message has been sent!.'});
        this.refreshList();
      } else{
        this.growlmsgs.push({severity:'error', summary:'Oops! Something went wrong! Please try again.'});
      }
    });
  }

  refreshList(){
    this.name = '';
    this.email = '';
    this.subject = '';
    this.description = '';
  }
}
