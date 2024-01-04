import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [
    NgForOf,
    CurrencyPipe
  ],
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products : Product[] =  [];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  private listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data
      }
    )
  }
}
