import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  product: any;

  constructor(private http:Http) { }

//Add a Product
  addContact(contact){
    //going to the backend
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('contacts/addcontact', contact,{headers: headers})
      .map(res => res.json());
  }
}
