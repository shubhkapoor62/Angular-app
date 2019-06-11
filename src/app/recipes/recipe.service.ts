import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  public recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 20)
      ])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice(0);
  }

  getRecipe(index: number) {
    console.log(this.recipes + 'in get Recipe');
    return this.recipes[index];
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.shoppingListService.addAllIngredients(ingredients);
  // }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipe(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipeChanged.next(this.recipes);
  }

}


