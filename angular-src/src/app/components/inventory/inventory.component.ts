import { Component, OnInit } from '@angular/core';
import { ProductService }    from '../../services/product.service';
import { Product }           from '../../product';    

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [
    new Product
    ('Iphone 6s',400,'One of the best phones on the market today by Apple',25,'test.jpg','Phones'),
    new Product
    ('Iphone 6',350,'One of the best phones on the market today',50,'test.jpg','Phones'),
    new Product
    ('Samsung Galaxy 5',300,'One of the best phones on the market today',10,'test.jpg','Phones')
    ];
  }

  ngOnInit() {
  //   this.productService.getProducts().subscribe(product => {
  //     this.PushToArrayGRSY(product);
  //   }, 
  //   err=> {
  //     console.log(err);
  //     return false;
  //   });
  // }

  // PushToArrayGRSY(product: Product[]){
  }

  productSelected(product: Product): void{
    console.log("Product Clicked: ", product);
  }
}
