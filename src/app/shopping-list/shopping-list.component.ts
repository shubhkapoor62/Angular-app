import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/shared/ingredient.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ShoppingListAction from './store/shopping-list-actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number)  {
    // this.shoppingListService.startedEditingEvent.next(index);
    this.store.dispatch(new ShoppingListAction.StartEdit(index));
  }
}
