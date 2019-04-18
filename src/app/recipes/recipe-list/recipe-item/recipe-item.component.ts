import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() item: any;
@Output() recipeItemEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onClickItem() {
    this.recipeItemEvent.emit();
  }
  
}
