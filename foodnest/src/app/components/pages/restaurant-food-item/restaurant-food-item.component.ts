import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-food-item',
  templateUrl: './restaurant-food-item.component.html',
  styleUrl: './restaurant-food-item.component.css',
})
export class RestaurantFoodItemComponent {
  restaurantId: number = 0;
  categoryId: number = 0;
  foodItemsList: any[] = [];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.restaurantId = res.restaurantId;
      this.categoryId = res.categoryId;
      this.getFoodItemOfRestaurantByCategory();
    });
  }

  getFoodItemOfRestaurantByCategory() {
    this.foodService
      .getFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId)
      .subscribe((res: any) => {
        this.foodItemsList = res.data;
      });
  }
}
