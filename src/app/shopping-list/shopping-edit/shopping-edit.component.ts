import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as ShoppingListActions from '../store/shopping-list-actions';
import { Ingredient } from 'src/app/shared/shared/ingredient.model';
import * as fromApp from '../../store/app.reducers';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form1') f1: NgForm;
  unSubEditEvent: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    this.unSubEditEvent = this.store.select('shoppingList')
      .subscribe(
        (data) => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.f1.setValue({
                  'name': this.editedItem.name,
                  'amount': this.editedItem.amount
                });
          } else {
            this.editMode = false;
          }
        }
      );
    // this.unSubEditEvent = this.shoppingListService.startedEditingEvent.subscribe((index: number) => {
    //   this.editedItemIndex = index;
    //   this.editMode = true;
    //   this.editedItem = this.shoppingListService.getIngredient(index);
    //   this.f1.setValue({
    //     'name': this.editedItem.name,
    //     'amount': this.editedItem.amount
    //   });
    // });
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.unSubEditEvent.unsubscribe();
  }

  OnaddingIngredients(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode === true) {
      // this.shoppingListService.updateIngrdients(this.editedItemIndex, newIngredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
      this.editMode = false;
      this.f1.reset();
      return;
    }
    this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
  }

  onClear() {
    console.log('data clear');
    this.f1.reset();
    this.editMode = false;
  }

  onDelete() {
    // this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

}
