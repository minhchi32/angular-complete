import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  ingredient: Ingredient;
  ngOnInit(): void {}
  onAddItem() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    this.ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(this.ingredient);
  }
}
