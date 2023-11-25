import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetAllFoodCategory_URL,
  GetFoodItemOfRestaurantByCategory_URL,
  GetRestaurantServingByCategoryId_URL,
} from '../constants/api_urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getAllFoods(): Observable<any> {
    return this.http.get(GetAllFoodCategory_URL);
  }

  getRestaurantServingByCategoryId(catID: number): Observable<any> {
    return this.http.get(GetRestaurantServingByCategoryId_URL + catID);
  }

  getFoodItemOfRestaurantByCategory(
    resID: number,
    catID: number
  ): Observable<any> {
    return this.http.get(
      GetFoodItemOfRestaurantByCategory_URL + resID + '&categoryId=' + catID
    );
  }
}
