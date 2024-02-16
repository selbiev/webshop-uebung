import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../category.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService, ProductService]
})
export class CategoriesComponent {
  categories : Category[] = [];
  chosenCategory: Category = new Category("","","");
  @Output() 
  categoriesChosenChange: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  constructor(private categoryService: CategoryService, private productService: ProductService) {
    this.loadAllCategories();
  }

  choseCategory(category: Category) {
    this.categoriesChosenChange.emit(this.getAllProductsByCategory(category));
  }

  resetCategories() {
    this.categoriesChosenChange.emit(this.productService.getAllProducts());
  }

  loadAllCategories() {
    this.categories = this.categoryService.getAllCategories(); 
  }

  getAllProductsByCategory(category: Category) : Product[] {
    let productIds : String[] = this.categoryService.getAllProductCategories()
    .filter((pc: { productId: string; categoryId: string}) => pc.categoryId.startsWith(category.id))
    .map((pc: { productId: string; categoryId: string}) => pc.productId);

    return this.productService.getAllProducts().filter(
      (prod: { id: string }) => productIds.indexOf(prod.id) > -1
    );
  }

}



