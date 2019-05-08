import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((data: Recipe) => {
      console.log(data + 'Recipe Item ');
      this.selectedRecipe = data;
      // this.router.navigate(['/recipes', 0]);
    }, (error) => {
      console.log('error');
    });
  }
}
