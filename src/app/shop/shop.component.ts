import { Component, ViewChild, inject } from '@angular/core';
import { Product } from './product.model';
import { FilterComponent } from './filter/filter.component';
import { ProductService } from '../services/product.service';
import { Category } from './category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ProductService, CategoryService]
})
export class ShopComponent {
  allProducts: Product[] = []
  displayedProducts: Product[] = []
  chosenCategory: Category = new Category("1","","");
  @ViewChild(FilterComponent)
  filter!: FilterComponent;

  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.loadProducts();
    this.resetDisplayedProducts();
  }

  onDisplayedProductsChange(newProducts: Product[]) {
    // This method will be called when displayedProducts changes in the child component
    // You can react to the changes here
    this.displayedProducts = newProducts;
  }

  onCategoriesChosenChange(newProducts: Product[]) {
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
