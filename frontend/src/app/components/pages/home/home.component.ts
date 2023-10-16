import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  foods: Food[] = [];
}
