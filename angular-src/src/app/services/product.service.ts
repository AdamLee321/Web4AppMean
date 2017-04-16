import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import { tokenNotExpired }  from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  product: any;

  constructor(private http:Http) { }

  addProduct(product){
    //going to the backend
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', product,{headers: headers})
      .map(res => res.json());
  }

  getProducts(product){

  }
}
