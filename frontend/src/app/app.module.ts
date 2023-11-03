import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StarRatingsComponent } from './components/partials/star-ratings/star-ratings.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagComponent } from './components/partials/tag/tag.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarRatingsComponent,
    SearchComponent,
    TagComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
