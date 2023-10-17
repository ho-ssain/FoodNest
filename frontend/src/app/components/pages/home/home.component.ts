import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObserable: Observable<Food[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObserable = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        foodsObserable = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        foodsObserable = foodService.getAll();
      }
      foodsObserable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
}
