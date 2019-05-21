import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  unsubIngredientChangeEvent: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.unsubIngredientChangeEvent = this.shoppingListService.ingredientsChangedEvent.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.unsubIngredientChangeEvent.unsubscribe();
  }

  onEditItem(index: number)  {
    this.shoppingListService.startedEditingEvent.next(index);
  }
}
