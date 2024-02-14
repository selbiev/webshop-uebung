import { Injectable } from "@angular/core";
import { Product } from "../shop/product.model";
import { Observable, of } from 'rxjs';
import { ProductCategory } from "../shop/product-category.model";
import { Category } from "../shop/category.model";

/*
    at the moment, this class doesn't really fetch the data from the backend, but just gives back an Observable with mock products
    as soon as the backend and DB is set up, it can make a get call to the backend
*/
@Injectable()
export class DataLoadingClient {
    getAllProducts(): Observable<Product> {
        const products: Product[] = [
            new Product("bcd882", "Computer Mouse", "https://euronics.ch/project/euronicsch/cache/domain1/domain1/renditeimages/product75888/a112573-637925411186569791-700x700-vcenterhcenter.jpeg.webp", 10, []),
            new Product("aaa888", "SSD Drive", "https://i5.walmartimages.com/asr/62a9abd1-926c-4ff9-8f93-a3c2f4d4314d_1.b263a12f4422d31e6c24560b928b4418.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", 20, []),
            new Product("dki881", "Microsoft Keyboard", "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/645458fcb9584fc2ba310ec8258e1f70?version=0", 30, []),
            new Product("kfj338", "USB Adapter", "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HMYE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1593320216000", 40, []),
            new Product("abc123", "Computer Mouse 2", "https://image.migros.ch/fm-xl/bf0ff08fc1dd2755c18e7457546261ec26a8c1a8/hama-optische-3-tasten-funkmaus-mw-300-v2-geraeuschlos-usb-e.jpg", 50, []),
            new Product("ksd992", "NVidia Graphics card GTX 1080", "https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-1080-ti-2c50-D.png", 60, []),
            new Product("ksd993", "NVidia Graphics card GTX 1080", "https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-1080-ti-2c50-D.png", 70, []),
            new Product("abc124", "Notebook Office 1", "https://shop.winpro.com.my/cdn/shop/files/c08473541_a537d292-ccf5-46ea-b54f-6e8d396209c6.png?v=1686623990&width=800", 80, []),
            new Product("abc125", "Notebook Office 2", "https://shop.winpro.com.my/cdn/shop/files/c08473541_a537d292-ccf5-46ea-b54f-6e8d396209c6.png?v=1686623990&width=800", 80, []),
            new Product("abc12x", "Computer Mouse 2", "https://image.migros.ch/fm-xl/bf0ff08fc1dd2755c18e7457546261ec26a8c1a8/hama-optische-3-tasten-funkmaus-mw-300-v2-geraeuschlos-usb-e.jpg", 90, []),
            new Product("abc127", "Notebook Home 1", "https://shop.winpro.com.my/cdn/shop/files/c08473541_a537d292-ccf5-46ea-b54f-6e8d396209c6.png?v=1686623990&width=800", 100, []),
            new Product("abc128", "Notebook Home 2", "https://shop.winpro.com.my/cdn/shop/files/c08473541_a537d292-ccf5-46ea-b54f-6e8d396209c6.png?v=1686623990&width=800", 100, []),
            new Product("abc129", "Notebook Home 3", "https://shop.winpro.com.my/cdn/shop/files/c08473541_a537d292-ccf5-46ea-b54f-6e8d396209c6.png?v=1686623990&width=800", 100, []),
            new Product("bcd883", "Computer Mouse", "https://euronics.ch/project/euronicsch/cache/domain1/domain1/renditeimages/product75888/a112573-637925411186569791-700x700-vcenterhcenter.jpeg.webp", 200, []),
            new Product("aaa889", "SSD Drive", "https://i5.walmartimages.com/asr/62a9abd1-926c-4ff9-8f93-a3c2f4d4314d_1.b263a12f4422d31e6c24560b928b4418.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", 300, []),
            new Product("dki882", "Microsoft Keyboard", "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/645458fcb9584fc2ba310ec8258e1f70?version=0", 400, []),
            new Product("kfj339", "USB Adapter", "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HMYE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1593320216000", 500, []),
            new Product("ksd994", "NVidia Graphics card GTX 1080", "https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-1080-ti-2c50-D.png", 600, []),
            new Product("ac127", "Tower PC 1", "https://www.mifcom.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0014_2_6_1.jpg", 700, []),
            new Product("ac128", "Tower PC 2", "https://www.mifcom.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0014_2_6_1.jpg", 700, []),
            new Product("abc12y", "Computer Mouse 2", "https://image.migros.ch/fm-xl/bf0ff08fc1dd2755c18e7457546261ec26a8c1a8/hama-optische-3-tasten-funkmaus-mw-300-v2-geraeuschlos-usb-e.jpg", 800, []),
            new Product("bcd884", "Computer Mouse", "https://euronics.ch/project/euronicsch/cache/domain1/domain1/renditeimages/product75888/a112573-637925411186569791-700x700-vcenterhcenter.jpeg.webp", 900, []),
            new Product("aaa890", "SSD Drive", "https://i5.walmartimages.com/asr/62a9abd1-926c-4ff9-8f93-a3c2f4d4314d_1.b263a12f4422d31e6c24560b928b4418.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", 1000, []),
            new Product("dki883", "Microsoft Keyboard", "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/645458fcb9584fc2ba310ec8258e1f70?version=0", 1100, []),
            new Product("kfj340", "USB Adapter", "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HMYE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1593320216000", 1200, [])
        ];
        return new Observable<Product>((observer) => {
            products.forEach(
                (product) => {
                    observer.next(product)
                }
            );
            observer.complete();
        });
    }

    getAllProductCategories() : Observable<ProductCategory> {
        const productCategoryList : ProductCategory[] = [
            new ProductCategory("bcd882", "1.1"),
            new ProductCategory("aaa888", "3.2"),
            new ProductCategory("dki881", "1.2"),
            new ProductCategory("kfj338", "3.3"),
            new ProductCategory("abc123", "1.1"),
            new ProductCategory("ksd992", "3.1"),
            new ProductCategory("ksd993", "3.1"),
            new ProductCategory("abc124", "2.1.1"),
            new ProductCategory("abc125", "2.1.1"),
            new ProductCategory("abc12x", "1.1"),
            new ProductCategory("abc127", "2.1.2"),
            new ProductCategory("abc128", "2.1.2"),
            new ProductCategory("abc129", "2.1.2"),
            new ProductCategory("bcd883", "1.1"),
            new ProductCategory("aaa889", "3.2"),
            new ProductCategory("dki882", "1.2"),
            new ProductCategory("kfj339", "3.3"),
            new ProductCategory("ksd994", "3.1"),
            new ProductCategory("ac127", "2.2"),
            new ProductCategory("ac128", "2.2"),
            new ProductCategory("abc12y", "1.1"),
            new ProductCategory("bcd884", "1.1"),
            new ProductCategory("aaa890", "3.2"),
            new ProductCategory("dki883", "1.2"),
            new ProductCategory("kfj340", "3.3")
        ];

        return new Observable<ProductCategory>((observer) => {
            productCategoryList.forEach(
                (productCategory) => {
                    observer.next(productCategory)
                }
            );
            observer.complete();
        });
    }

    getAllCategories() : Observable<Category> {
        const categoryList : Category[] = [
            new Category("1", "PC periphery", "Input/Output for Computers such as keyboards, mouses etc."),
            new Category("1.1", "Mouses", ""),
            new Category("1.2", "Keyboards", ""),
            new Category("1.3", "Monitors", ""),
            new Category("2", "PCs", "All kinds of Computers"),
            new Category("2.1", "Notebooks", ""),
            new Category("2.1.1", "Office Notebooks", ""),
            new Category("2.1.2", "Home Notebooks", ""),
            new Category("2.2", "Tower PCs", ""),
            new Category("3", "Accessories", "accessories for computers such as graphic cards, harddisks etc."),
            new Category("3.1", "Graphic cards", ""),
            new Category("3.2", "Hard discs", ""),
            new Category("3.3", "Adapters", "")
        ]
        
        return new Observable<Category>((observer) => {
            categoryList.forEach(
                (category) => {
                    observer.next(category)
                }
            );
            observer.complete();
        });
    }
}