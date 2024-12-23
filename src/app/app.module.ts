import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { CategoriesComponent } from './shop/categories/categories.component';
import { FilterComponent } from './shop/filter/filter.component';
import { ListingComponent } from './shop/listing/listing.component';
import { ListingItemComponent } from './shop/listing/listing-item/listing-item.component';
import { DataLoadingClient } from './services/data-client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    FilterComponent,
    CategoriesComponent,
    ListingComponent,
    ListingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [DataLoadingClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
