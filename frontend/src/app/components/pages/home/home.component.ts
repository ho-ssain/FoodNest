import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
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
    //....................................
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((p) => {
      if (p.searchTerm) {
        foodObservable = foodService.getAllFoodsBySearchTerm(p.searchTerm);
      } else if (p.tag) {
        foodObservable = foodService.getAllFoodsByTag(p.tag);
      } else {
        foodObservable = foodService.getAll();
      }

      foodObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
}
