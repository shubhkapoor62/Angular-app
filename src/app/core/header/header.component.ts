import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { DataSharingService } from '../../shared/data-sharing.service';
import { Response } from '@angular/http';
import { Recipe } from 'src/app/recipes/recipe.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataSharingService: DataSharingService,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveDataClick() {
    this.dataSharingService.SaveData(this.recipeService.getRecipes())
    .subscribe( (response) => {
      console.log('Response' + response);
    });
  }

  onFetchData() {
    this.dataSharingService.fetchData()
    .subscribe( (recipes) => {
      this.recipeService.setRecipe(recipes);
    });
  }

}

