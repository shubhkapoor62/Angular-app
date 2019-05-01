import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from './../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() item: any;
@Output() recipeItemEvent = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onClickItem(item) {
    this.recipeService.recipeSelected.emit(item);
  }
  
}
