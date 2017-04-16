import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router}             from '@angular/router';
import { ProductService }    from '../../services/product.service';
import { MessagesModule, Message, GrowlModule, Growl } from 'primeng/primeng';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  growlmsgs: Message[] = [];
  user: Object;
  name: String;
  price: String;
  desc: String;
  qty: Number;
  image: String;
  department: String;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) { }

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
      desc: this.desc,
      qty: this.qty,
      image: this.image,
      department: this.department
      }
      this.productService.addProduct(product).subscribe(data => {
        if(data.success){
        this.growlmsgs.push({severity:'success', summary:'Product has been added to the database.'});
        //this.router.navigate(['/login']);
      } else{
        this.growlmsgs.push({severity:'error', summary:'Oops! Something went wrong! Please try again.'});
        this.router.navigate(['/manage']);
      }
    });
  }

  getAllProducts(){
    //Return all products to an array.
  }
}