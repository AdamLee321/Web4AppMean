import { Component, OnInit } from '@angular/core';
import { ProductService }    from '../../services/product.service';  

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  

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

  productSelected(): void{
    console.log("Product Clicked: ");
  }
}
