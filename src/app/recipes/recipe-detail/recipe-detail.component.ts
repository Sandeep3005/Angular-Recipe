import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(
    private recipeService: RecipeService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.currentRoute.snapshot.params);
    let recipeId = +this.currentRoute.snapshot.params.id;
    this.currentRoute.params.subscribe((params) => {
      recipeId = +params.id;
    })
    this.selectedRecipe = this.recipeService.getRecipe(recipeId);
  }

  addToShopingList() {
    const { ingredients } = this.selectedRecipe;
    this.recipeService.addToShoppingList(ingredients);    
    return false;
  }

}
