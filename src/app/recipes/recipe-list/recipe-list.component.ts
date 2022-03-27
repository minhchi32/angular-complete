import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://media.istockphoto.com/photos/spaghetti-bolognese-on-a-white-plate-picture-id652225084?k=20&m=652225084&s=612x612&w=0&h=h0NEoW8JnUfTB3mon7DB5mF_0J1VA4rlkKEvO-SGk2M='
    ),
    new Recipe(
      'A Test Recipe1',
      'This is simply a test',
      'https://media.istockphoto.com/photos/spaghetti-bolognese-on-a-white-plate-picture-id652225084?k=20&m=652225084&s=612x612&w=0&h=h0NEoW8JnUfTB3mon7DB5mF_0J1VA4rlkKEvO-SGk2M='
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
