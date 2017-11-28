import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';

@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}
  private recipes: Array<Recipe> = [
    new Recipe(
      1,
      'Tasty Veg Burger', 
      'A veggie burger is a burger that does not contain meat. The patty of a veggie burger may be made from soy, legumes (beans), tofu, nuts, mushrooms, or grains or seeds, like wheat and flax.', 
      'https://goo.gl/pC8CiH',
      [
        new Ingredient('Oil', 2, 'tablespoon'),
        new Ingredient('ChickPeas', 1, 'cup'),
        new Ingredient('Bread', 2, 'slices'),
      ]
    ),
    new Recipe(
      2,
      'Pizza',
      'Pizza is a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments.',
      'https://goo.gl/LYsG97',
      [
        new Ingredient('Bread', 1, 'base'),
        new Ingredient('Cheese', 10, 'slice'),
        new Ingredient('Oil', 2, 'tablespoon'),
      ]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  public getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find(r => r.id === id);
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  addToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach((ing) => {
      this.shoppingListService.addIngredients(ing);
    });
    
  }
}