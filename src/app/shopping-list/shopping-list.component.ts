import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsAdded.subscribe((ingredient) => {
      console.log(ingredient);
      this.ingredients = ingredient;
    });
  }

  // onIngredientsAdd(ingData) {
  //   this.shoppingListService.addIngredients(ingData);
  // }

}
