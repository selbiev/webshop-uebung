import { numberAttribute } from "@angular/core";

export class Product {
    public id: string;
    public description: string;
    public imagePath: string;
    public price: number;
    public tags: string[]; 

    constructor(id: string, description: string, imagePath: string, price: number, tags: string[]) {
        this.id = id;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.tags = tags;
    }
}