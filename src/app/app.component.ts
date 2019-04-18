import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopRecipe';
  featureSelect: string;

  jumpTo(event): void {
    console.log( event.pageLink);
    this.featureSelect = event.pageLink;
  }
}
