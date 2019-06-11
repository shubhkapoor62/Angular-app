import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list-actions';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducers';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeDetail: Recipe;
  recipeDetail: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    // this.recipeDetail = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id + ' ID');
        this.recipeDetail = this.recipeService.getRecipe(this.id);
        console.log(this.recipeDetail + ' Recipe Detail');
      }
    );
  }

  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipeDetail.ingredients));
  }

  onEditRecipe() {
  this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    // this.store.dispatch(new ShoppingListActions.DeleteIngredient)
    this.router.navigate(['/recipes']);
  }

}
