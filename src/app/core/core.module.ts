import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { CommonModule } from '@angular/common';

import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { DataSharingService } from '../shared/data-sharing.service';
import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        AppRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        AppRoutingModule,
        CommonModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataSharingService,
        AuthService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
        ],
})
export class CoreModule {

}
