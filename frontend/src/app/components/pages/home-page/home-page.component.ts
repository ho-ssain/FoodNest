import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food.model';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  foods!: Food[];

  constructor(foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.term) this.foods = foodService.getFoodsBySearch(params.term);
      else if (params.tag) this.foods = foodService.getFoodsByTag(params.tag);
      else this.foods = foodService.getAllFoods();
    });
  }
}
