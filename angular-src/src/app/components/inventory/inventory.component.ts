import { Component, OnInit }    from '@angular/core';
import { Product }              from '../../_models/Product';
import { ProductService}        from '../../services/product.service';
import { Router }               from '@angular/router';
import { Observable, Subject }  from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  

  products: Product[];
  quantity: number;

  // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
  // Because they are injected in the constructor
  constructor (
    private productService:ProductService, 
    private router:Router
    ) {
       this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    }

  // Dynamic route for detail info when a product is clicked
  clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product) {
    // this.productService.addToCart(product)
    console.log(this.quantity)
    //this.cartStore.addToCart(product, this.quantity || 1)
  }

  // getProductData() {     
  //    this.productService.getProducts().then(products => this.products = products)
  // }

  ngOnInit() {
  }
}