import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.modal';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput")
  @ViewChild("quantityInput")
  private nameEl: ElementRef;
  private quantityEl: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onIngredientAdd(name, amount) {
    let unit = 'kg';
    this.shoppingListService.addIngredients({name, amount, unit});
    return false;
  }

  onFormClear() {
    //console.log(this.nameEl.nativeElement.value);
    //this.nameEl.nativeElement.value = "";
    //console.log(this.quantityEl.nativeElement);
    //this.quantityEl.nativeElement.value = 0;
    return false;
  }

}
