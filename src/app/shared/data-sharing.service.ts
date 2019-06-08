import { Injectable } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(private httpClient: HttpClient,
    private authService: AuthService) { }

  SaveData(data) {
    const token = this.authService.getToken();
    // return this.httpClient.put('https://ng-recipe-book-ebfb6.firebaseio.com/recipes.json', data,
    // {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-ebfb6.firebaseio.com/recipes.json', data,
    {reportProgress: true});

    return this.httpClient.request(req);
  }

  fetchData() {
    const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-ebfb6.firebaseio.com/recipes.json',
      {
        observe: 'body',
        responseType: 'json'
      }
    );
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
