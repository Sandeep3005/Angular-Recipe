import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.modal';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeSelected: Recipe;
  
  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    console.log(this.currentRoute.snapshot);
    let recipeId = +this.currentRoute.snapshot.params.id;
    this.currentRoute.params.subscribe(params => {
      recipeId = +params.id;
    });

    console.log(recipeId);
    this.recipeSelected = this.recipeService.getRecipe(recipeId);
  }
}
