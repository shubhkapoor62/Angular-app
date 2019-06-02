import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(private http: Http,
    private authService: AuthService) { }

  SaveData(data) {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-ebfb6.firebaseio.com/recipes.json?auth=' + token, data);
  }

  fetchData() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-ebfb6.firebaseio.com/recipes.json?auth=' + token);
      // .map(
      //   (response: Response) => {
      //     const recipe: Recipe[] = response.json();
      //     if (!recipe['ingredient']) {
      //       recipe['ingredient'] = [];
      //     }
      //     return recipe;
      //   });
  }

}
