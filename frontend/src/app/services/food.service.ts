import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food.model';
import { sample_foods, sample_tags } from '../../assets/data/data';
import { Tag } from '../shared/models/Tag.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFoods(): Food[] {
    return sample_foods;
  }

  getFoodsBySearch(searchTerm: string): Food[] {
    return this.getAllFoods().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getFoodsByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAllFoods()
      : this.getAllFoods().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(id: string): Food {
    return this.getAllFoods().find((food) => food.id === id) ?? new Food();
  }
}
