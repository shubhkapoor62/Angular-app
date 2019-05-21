import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from './../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form1') f1: NgForm;
  unSubEditEvent: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.unSubEditEvent = this.shoppingListService.startedEditingEvent.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.f1.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount
      });
    });
  }

  ngOnDestroy() {
    this.unSubEditEvent.unsubscribe();
  }

  OnaddingIngredients(form: NgForm) {
    const value = form.value;
    if (this.editMode === true) {
      this.shoppingListService.updateIngrdients(this.editedItemIndex, { name: value.name, amount: value.amount });
      this.editMode = false;
      this.f1.reset();
      return;
    }
    this.shoppingListService.addIngredients({ name: value.name, amount: value.amount });
  }

  onClear() {
    console.log('data clear');
    this.f1.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }

}
