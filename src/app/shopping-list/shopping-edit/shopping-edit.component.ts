import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  AddingIngredients(nameInput, amountInput) {
    console.log(nameInput.value);
    console.log(amountInput.value);
    // this.addIngredients.emit({name: nameInput.value, amount: amountInput.value});
    // this.shoppingListService.pushIngredientsEvent.emit({name: nameInput.value, amount: amountInput.value});
    this.shoppingListService.addIngredients({name: nameInput.value, amount: amountInput.value});
  }

}
