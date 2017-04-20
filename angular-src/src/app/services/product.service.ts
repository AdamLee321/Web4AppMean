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
    return this.http.post('products/addproduct', product,{headers: headers})
      .map(res => res.json());
  }

//Get All Products
  getProducts(){
    return this.http.get('products/getproducts').map(res => res.json());
  }

  deleteProduct(product){
    return this.http.delete('products/product/' + product).map(res => res.json);
  }

  updateProduct(product){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('products/addproduct', product,{headers: headers})
      .map(res => res.json());
  }
}
