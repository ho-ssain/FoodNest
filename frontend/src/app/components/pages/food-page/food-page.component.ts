import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    foodService: FoodService,
    activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.food = foodService.getFoodById(params.id);
      console.log(params);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
