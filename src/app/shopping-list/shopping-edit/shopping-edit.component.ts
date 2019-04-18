import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @Output() addIngredients = new EventEmitter<{name: string, amount: number}>(); 
  constructor() { }

  ngOnInit() {
  }

  AddingIngredients(nameInput, amountInput) {
    console.log(nameInput.value);
    console.log(amountInput.value);
    this.addIngredients.emit({name: nameInput.value, amount: amountInput.value});
  }

}
