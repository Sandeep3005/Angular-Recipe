import { OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.modal';

export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Matar', 2, 'kg'),
    new Ingredient('Panner', 500, 'g')
  ]; 

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingData: Ingredient) {
    this.ingredients.push({
      name: ingData.name,
      amount: ingData.amount,
      unit: ingData.unit
    });
    this.ingredientsAdded.emit(this.ingredients);
  }
}