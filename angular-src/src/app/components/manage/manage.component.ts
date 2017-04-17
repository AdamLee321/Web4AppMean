import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router}             from '@angular/router';
import { ProductService }    from '../../services/product.service';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';
import { Product }           from '../../_models/Product';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
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
		this.productService.getProducts();
	}

  deleteProduct(id){
        var products = this.products; 
        this.productService.deleteTask(id).subscribe(data => {
              for(var i = 0; i < products.length;i++){
                  if(products[i]._id == id){
                      products.splice(i, 1);
                      this.refreshList();
                  }
              }
        });
    }
}