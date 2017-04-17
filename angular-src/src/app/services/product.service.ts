import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  product: any;

  constructor(private http:Http) { }

//Add a Product
  addProduct(product){
    //going to the backend
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/products/addproduct', product,{headers: headers})
      .map(res => res.json());
  }

//Get All Products
  getProducts(){
    return this.http.get('http://localhost:3000/products/getproducts').map(res => res.json());
  }

  deleteTask(id){
    return this.http.delete('http://localhost:3000/products/product/' + id).map(res => res.json);
  }
}
