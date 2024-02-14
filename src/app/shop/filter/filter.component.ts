import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  displayedProducts: Product[] = [];
  @Input()
  allProducts: Product[] = [];
  @Output() 
  displayedProductsChange: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  priceFrom: number = 0;
  priceTo: number = 5000;
  warning: string = "";
  freeFilterString: string = "";
  maxPrice: number = 1000000;
  minPrice: number = 0;

  doFilter() {
    this.warning = ""
    this.resetProducts()
    this.filterByPriceRange()
    this.filterByFreeText()
  }

  filterByFreeText() {
    this.displayedProducts = this.displayedProducts.filter(
      (prod: { description: string; tags: string[] }) => 
        prod.description.toLowerCase().includes(this.freeFilterString))
    this.emitEventDisplayProducts();
  }

  private emitEventDisplayProducts() {
    this.displayedProductsChange.emit(this.displayedProducts);
  }

  filterByPriceRange(){
    console.log("price from: " + this.priceFrom + ", price to: " + this.priceTo)
    if(this.priceFrom === 0 && this.priceTo === 0) {
      return
    }
    if(this.priceFrom > this.priceTo) {
      this.warning = "Mindestpreis muss tiefer als Höchstpreis sein"
      console.log(this.warning + ", Mindestpreis: " + this.priceFrom + ", Höchstpreis " + this.priceTo)
      alert(this.warning)
      return
    }
    this.displayedProducts = this.displayedProducts.filter(
      (prod: { price: number; }) => 
        prod.price >= this.priceFrom
        && prod.price <= this.priceTo)
      this.emitEventDisplayProducts()
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
