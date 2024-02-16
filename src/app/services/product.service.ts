import { Injectable } from "@angular/core";
import { Product } from "../shop/product.model";
import { DataLoadingClient } from "./data-client.service";
import { map } from "rxjs";

@Injectable()
export class ProductService {

    constructor(private dataLoadingClient: DataLoadingClient) {}

    getAllProducts(): Product[] {
        var allProducts: Product[] = [];
        this.dataLoadingClient.getAllProducts()
        .subscribe({
            next(product) {
                allProducts.push(product)
            }
        });
        return allProducts;
    }
    
}