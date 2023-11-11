import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
})
export class TagComponent {
  tags?: Tag[];

  constructor(foodService: FoodService) {
    foodService
      .getAllTags()
      .subscribe((serverTags) => (this.tags = serverTags));
  }
}
