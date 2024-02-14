import { Injectable } from "@angular/core";
import { Product } from "../shop/product.model";
import { DataLoadingClient } from "./data-client.service";
import { map } from "rxjs";
import { ProductCategory } from "../shop/product-category.model";
import { Category } from "../shop/category.model";

@Injectable()
export class CategoryService {

    constructor(private dataLoadingClient: DataLoadingClient) {}

    getAllProductCategories(): ProductCategory[] {
        var allProducts: ProductCategory[] = [];
        this.dataLoadingClient.getAllProductCategories()
        .subscribe({
            next(product) {
                allProducts.push(product)
            }
        });
        return allProducts;
    }

    getAllCategories(): Category[] {
        var allProducts: Category[] = [];
        this.dataLoadingClient.getAllCategories()
        .subscribe({
            next(category) {
                allProducts.push(category)
            }
        });
        return allProducts;
    }
    
}