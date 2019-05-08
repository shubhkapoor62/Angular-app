import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];

    public ingredientsChangedEvent = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(data: Ingredient) {
        this.ingredients.push(new Ingredient(data.name, data.amount));
        this.ingredientsChangedEvent.emit(this.ingredients.slice());
    }

    addAllIngredients(data: Ingredient[]) {
        this.ingredients.push(...data);
        this.ingredientsChangedEvent.emit(this.ingredients.slice());
    }

}