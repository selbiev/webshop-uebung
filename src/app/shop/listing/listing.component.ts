import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @Input()
  products: Product[] = [];
}
