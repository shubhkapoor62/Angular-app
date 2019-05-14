import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];

    public ingredientsChangedEvent = new Subject<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(data: Ingredient) {
        this.ingredients.push(new Ingredient(data.name, data.amount));
        this.ingredientsChangedEvent.next(this.ingredients.slice());
    }

    addAllIngredients(data: Ingredient[]) {
        this.ingredients.push(...data);
        this.ingredientsChangedEvent.next(this.ingredients.slice());
    }

}
