import { Component, ViewChild, inject } from '@angular/core';
import { Product } from './product.model';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  allProducts: Product[] = []
  displayedProducts: Product[] = []
  @ViewChild(FilterComponent)
  filter!: FilterComponent;
  
  ngOnInit(){
    this.loadProducts();
    this.resetDisplayedProducts();
  }

  onDisplayedProductsChange(newProducts: Product[]) {
    // This method will be called when displayedProducts changes in the child component
    // You can react to the changes here
    this.displayedProducts = newProducts;
  }

  loadProducts() {
    this.allProducts.push(new Product("bcd882", "Computer Mouse", "https://euronics.ch/project/euronicsch/cache/domain1/domain1/renditeimages/product75888/a112573-637925411186569791-700x700-vcenterhcenter.jpeg.webp", 10, []));
    this.allProducts.push(new Product("aaa888", "SSD Drive", "https://i5.walmartimages.com/asr/62a9abd1-926c-4ff9-8f93-a3c2f4d4314d_1.b263a12f4422d31e6c24560b928b4418.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", 20, []));
    this.allProducts.push(new Product("dki881", "Microsoft Keyboard", "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/645458fcb9584fc2ba310ec8258e1f70?version=0", 30, []));
    this.allProducts.push(new Product("kfj338", "USB Adapter", "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HMYE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1593320216000", 40, []));
    this.allProducts.push(new Product("abc123", "Computer Mouse 2", "https://image.migros.ch/fm-xl/bf0ff08fc1dd2755c18e7457546261ec26a8c1a8/hama-optische-3-tasten-funkmaus-mw-300-v2-geraeuschlos-usb-e.jpg", 50, []));
    this.allProducts.push(new Product("ksd992", "NVidia Graphics card GTX 1080", "https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-1080-ti-2c50-D.png", 60, []));
    this.allProducts.push(new Product("ksd992", "NVidia Graphics card GTX 1080", "https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-1080-ti-2c50-D.png", 70, []));
    this.allProducts.push(new Product("abc123", "Desktop Computer", "https://www.mifcom.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0014_2_6_1.jpg", 80, []));
    this.allProducts.push(new Product("abc123", "Computer Mouse 2", "https://image.migros.ch/fm-xl/bf0ff08fc1dd2755c18e7457546261ec26a8c1a8/hama-optische-3-tasten-funkmaus-mw-300-v2-geraeuschlos-usb-e.jpg", 90, []));
    this.allProducts.push(new Product("abc123", "Desktop Computer", "https://www.mifcom.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0014_2_6_1.jpg", 100, []));
    this.allProducts.push(new Product("bcd882", "Computer Mouse", "https://euronics.ch/project/euronicsch/cache/domain1/domain1/renditeimages/product75888/a112573-637925411186569791-700x700-vcenterhcenter.jpeg.webp", 200, []));
    this.allProducts.push(new Product("aaa888", "SSD Drive", "https://i5.walmartimages.com/asr/62a9abd1-926c-4ff9-8f93-a3c2f4d4314d_1.b263a12f4422d31e6c24560b928b4418.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", 300, []));
    this.allProducts.push(new Product("dki881", "Microsoft Keyboard", "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/645458fcb9584fc2ba310ec8258e1f70?version=0", 400, []));
    this.allProducts.push(new Product("kfj338", "USB Adapter", "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HMYE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1593320216000", 500, []));
    this.allProducts.push(new Product("ksd992", "NVidia Graphics card GTX 1080", "https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-1080-ti-2c50-D.png", 600, []));
    this.allProducts.push(new Product("abc123", "Desktop Computer", "https://www.mifcom.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0014_2_6_1.jpg", 700, []));
    this.allProducts.push(new Product("abc123", "Computer Mouse 2", "https://image.migros.ch/fm-xl/bf0ff08fc1dd2755c18e7457546261ec26a8c1a8/hama-optische-3-tasten-funkmaus-mw-300-v2-geraeuschlos-usb-e.jpg", 800, []));
    this.allProducts.push(new Product("bcd882", "Computer Mouse", "https://euronics.ch/project/euronicsch/cache/domain1/domain1/renditeimages/product75888/a112573-637925411186569791-700x700-vcenterhcenter.jpeg.webp", 900, []));
    this.allProducts.push(new Product("aaa888", "SSD Drive", "https://i5.walmartimages.com/asr/62a9abd1-926c-4ff9-8f93-a3c2f4d4314d_1.b263a12f4422d31e6c24560b928b4418.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", 1000, []));
    this.allProducts.push(new Product("dki881", "Microsoft Keyboard", "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/645458fcb9584fc2ba310ec8258e1f70?version=0", 1100, []));
    this.allProducts.push(new Product("kfj338", "USB Adapter", "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HMYE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1593320216000", 1200, []));
  }

  resetDisplayedProducts(){
    for(var product of this.allProducts) {
      this.displayedProducts.push(product);
    }
  }
}
