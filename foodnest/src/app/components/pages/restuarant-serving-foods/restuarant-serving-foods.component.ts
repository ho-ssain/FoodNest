import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restuarant-serving-foods',
  templateUrl: './restuarant-serving-foods.component.html',
  styleUrl: './restuarant-serving-foods.component.css',
})
export class RestuarantServingFoodsComponent {
  currentCategoryId: number = 0;
  restaurantList: any[] = [];

  constructor(
    private foodService: FoodService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    activateRoute.params.subscribe((res: any) => {
      // debugger;
      this.currentCategoryId = res.id;
      this.getRestaurantServing();
    });
  }

  getRestaurantServing() {
    this.foodService
      .getRestaurantServingByCategoryId(this.currentCategoryId)
      .subscribe((res: any) => {
        this.restaurantList = res.data;
      });
  }

  navigateToRestaurant(restaurantID: number) {
    this.router.navigate([
      'restaurant-food-item',
      restaurantID,
      this.currentCategoryId,
    ]);
  }
}
