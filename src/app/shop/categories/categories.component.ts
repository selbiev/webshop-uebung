import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})
export class CategoriesComponent {
  categories : Category[] = [];
  constructor(private categoryService: CategoryService) {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categories = this.categoryService.getAllCategories(); 
  }

}



