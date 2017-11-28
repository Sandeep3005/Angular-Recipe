import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.modal';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(
    private recipeService:RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      this.selectedRecipe = recipe;
      this.router.navigate(['/recipes', recipe.id, 'edit'] )
    });
  }
  
}

//, { relativeTo: this.route }