export class ProductCategory {
    public productId: string;
    public categoryId: string;

    constructor(productId: string, categoryId: string) {
        this.productId = productId;
        this.categoryId = categoryId;
    }
}