import { Ingredient } from './../shared/ingredient.modal';
export class Recipe {
  public id?: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(id, name, description, imagePath, ingredient) {
    this.id = id,
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredient;
  }

}