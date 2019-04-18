import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<any>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
     'https://www.maxpixel.net/static/photo/1x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg')
  ];
  constructor() {
    this.recipes.push(new Recipe('Another test Recipe', 'This is simply a test',
    'https://www.maxpixel.net/static/photo/1x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg'));
  }

  ngOnInit() {
  }

  OnSelectRecipe(recipedata) {
    console.log(recipedata + 'shbdhs');
    this.recipeWasSelected.emit(recipedata);
  }

}
