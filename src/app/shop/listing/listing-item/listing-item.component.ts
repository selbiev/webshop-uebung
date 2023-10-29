import { Component, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent {
  @Input()
  product!: Product;
}
