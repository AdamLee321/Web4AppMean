import { Component, OnInit } from '@angular/core';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitContact(){

  }
}
