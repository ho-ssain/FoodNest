import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css',
})
export class FoodsComponent implements OnInit {
  foodItems: any[] = [];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllFoodCategory();
  }

  loadAllFoodCategory() {
    this.foodService.getAllFoods().subscribe((result: any) => {
      this.foodItems = result.data;
    });
  }

  navigateToRestaurantList(catID: number) {
    this.router.navigate(['restaurant-foods', catID]);
  }
}
