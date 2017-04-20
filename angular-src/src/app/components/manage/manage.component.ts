import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router}             from '@angular/router';
import { ProductService }    from '../../services/product.service';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';
import { Product }           from '../../_models/Product';
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ImageUploadModule }    from 'angular2-image-upload';

//const URL = 'https://quiet-sierra-22706.herokuapp.com/products/addproduct';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  //public uploader:FileUploader = new FileUploader({url: URL});
  growlmsgs: Message[] = [];
  products: Product[] = [];
  data: any[];
  user: Object;
  name: String;
  price: String;
  description: String;
  quantity: Number;
  imageUrl: String;
  department: String;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) { 
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, 
    err=> {
      console.log(err);
      return false;
    });
  }

  private getIndexOfProduct = (_id: String) => {
    return this.products.findIndex((product) => {
      return product._id === _id;
    });
  }

  onAddProduct(){
    const product = {
      name: this.name,
      price: this.price,
      description: this.description,
      quantity: this.quantity,
      imageUrl: this.imageUrl,
      department: this.department
    }
    console.log(product);
      this.productService.addProduct(product).subscribe(data => {
        if(data.success){
        this.growlmsgs.push({severity:'success', summary:'Product has been added to the database.'});
        this.refreshList();
        
      } else{
        this.growlmsgs.push({severity:'error', summary:'Oops! Something went wrong! Please try again.'});
        this.router.navigate(['/admin/manage']);
      }
    });
  }

  refreshList(){
		this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
	}

  updateProductList(){
    const product = {
      name: this.name,
      price: this.price,
      description: this.description,
      quantity: this.quantity,
      imageUrl: this.imageUrl,
      department: this.department
      }
    this.productService.updateProduct(product).subscribe(data => {
      if(data.success){
        this.growlmsgs.push({severity:'success', summary:'Product has been updated in the database.'});
        this.refreshList();
      } else{
        this.growlmsgs.push({severity:'error', summary:'Oops! Something went wrong! Please try again.'});
        this.router.navigate(['/admin/manage']);
      }
    });
    console.log("this is product " + product);
  }

  deleteProduct(id){
        var products = this.products; 
        this.productService.deleteProduct(id).subscribe(data => {
              for(var i = 0; i < products.length;i++){
                  if(products[i]._id == id){
                      products.splice(i, 1);
                      return this.products;
                  }
              }
        });
    }
}