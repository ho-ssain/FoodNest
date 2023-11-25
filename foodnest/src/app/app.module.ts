import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { FoodsComponent } from './components/pages/foods/foods.component';
import { RestuarantServingFoodsComponent } from './components/pages/restuarant-serving-foods/restuarant-serving-foods.component';
import { RestaurantFoodItemComponent } from './components/pages/restaurant-food-item/restaurant-food-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingsComponent } from './components/partials/star-ratings/star-ratings.component';
import { TitleComponent } from './components/partials/title/title.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    FoodsComponent,
    RestuarantServingFoodsComponent,
    RestaurantFoodItemComponent,
    StarRatingsComponent,
    TitleComponent,
    TextInputComponent,
    DefaultButtonComponent,
    InputValidationComponent,
    InputContainerComponent,
    LoadingComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
