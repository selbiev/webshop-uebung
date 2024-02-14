import { Component, ViewChild, inject } from '@angular/core';
import { Product } from './product.model';
import { FilterComponent } from './filter/filter.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ProductService]
})
export class ShopComponent {
  allProducts: Product[] = []
  displayedProducts: Product[] = []
  @ViewChild(FilterComponent)
  filter!: FilterComponent;

  constructor(private productService: ProductService) {
    this.loadProducts();
    this.resetDisplayedProducts();
  }

  onDisplayedProductsChange(newProducts: Product[]) {
    // This method will be called when displayedProducts changes in the child component
    // You can react to the changes here
    this.displayedProducts = newProducts;
  }

  loadProducts() {
    this.allProducts = this.productService.getAllProducts();
  }

  resetDisplayedProducts(){
    for(var product of this.allProducts) {
      this.displayedProducts.push(product);
    }
  }
}
