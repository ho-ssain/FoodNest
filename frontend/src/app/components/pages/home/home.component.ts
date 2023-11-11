import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((p) => {
      if (p.searchTerm) {
        foodObservable = this.foodService.getAllFoodsBySearchTerm(p.searchTerm);
      } else if (p.tag) {
        foodObservable = this.foodService.getFoodsByTag(p.tag);
      } else {
        foodObservable = this.foodService.getAll();
      }

      foodObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
}
