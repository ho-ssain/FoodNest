import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestuarantServingFoodsComponent } from './components/pages/restuarant-serving-foods/restuarant-serving-foods.component';
import { FoodsComponent } from './components/pages/foods/foods.component';
import { RestaurantFoodItemComponent } from './components/pages/restaurant-food-item/restaurant-food-item.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'foods',
    pathMatch: 'full',
  },
  {
    path: 'foods',
    component: FoodsComponent,
  },
  {
    path: 'restaurant-foods/:id',
    component: RestuarantServingFoodsComponent,
  },
  {
    path: 'restaurant-food-item/:restaurantId/:categoryId',
    component: RestaurantFoodItemComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
