import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
import {MatSliderModule} from '@angular/material/slider';
import { Category } from '../category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductCategory } from '../product-category.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [CategoryService]
})
export class FilterComponent {
  @Input()
  displayedProducts: Product[] = [];
  @Input()
  allProducts: Product[] = [];
  @Input()
  chosenCategory: Category = new Category(".","","");
  @Output() 
  displayedProductsChange: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  categories: Category[] = [];
  productCategories: ProductCategory[] = [];
  priceFrom: number = 0;
  priceTo: number = 5000;
  warning: string = "";
  freeFilterString: string = "";
  maxPrice: number = 1000000;
  minPrice: number = 0;

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getAllCategories();
    this.productCategories = this.categoryService.getAllProductCategories();
  }

  doFilter() {
    //warning: 
    this.warning = ""
    this.resetProducts()
    this.filterByFreeText()
    this.filterByPriceRange()
    this.emitEventDisplayProducts()
  }

  filterByFreeText() {
    //todo this.allproducts besser
    this.displayedProducts = this.allProducts.filter(
      (prod: { description: string; tags: string[] }) => 
        prod.description.toLowerCase().includes(this.freeFilterString))
  }

  private emitEventDisplayProducts() {
    this.displayedProductsChange.emit(this.displayedProducts);
  }

  filterByPriceRange(){
    if(this.priceFrom === 0 && this.priceTo === 0) {
      return
    }
    if(this.priceFrom > this.priceTo) {
      this.warning = "Mindestpreis muss tiefer als Höchstpreis sein"
      alert(this.warning)
      return
    }
    this.displayedProducts = this.displayedProducts.filter(
      (prod: { price: number; }) => 
        prod.price >= this.priceFrom
        && prod.price <= this.priceTo)
  }

  resetProducts() {
    this.displayedProducts = []
    for(let i = 0; i < this.allProducts.length; i++){
      this.displayedProducts.push(this.allProducts[i])
    }
  }

  resetFilter() {
    this.priceFrom = this.minPrice;
    this.priceTo = this.maxPrice;
    this.freeFilterString = "";
    this.resetProducts();
    this.emitEventDisplayProducts()
  }
}
