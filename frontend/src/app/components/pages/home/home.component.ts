import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

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
    activatedRoute.params.subscribe((p) => {
      if (p.searchTerm) {
        this.foods = foodService.getAllFoodsBySearchTerm(p.searchTerm);
      } else if (p.tag) {
        this.foods = foodService.getAllFoodsByTag(p.tag);
      } else {
        this.foods = foodService.getAll();
      }
    });
  }
}
