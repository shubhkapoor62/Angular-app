import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShopRecipe';
  featureSelect: string;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4eKSPZIvBmIKYQ0mPXP7ItT9jSixIquU',
      authDomain: 'ng-recipe-book-ebfb6.firebaseapp.com',
    });

  }


}
