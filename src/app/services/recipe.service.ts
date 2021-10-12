import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id:'r1',
      title: 'Pizza',
      imageUrl: 'https://www.hervecuisine.com/wp-content/uploads/pizzaweb-1118x516.jpg',
      ingredients: ['Mozzerela', 'Thon', 'Olives']
    },
    {
      id:'r2',
      title: 'Spaghetti meatballs',
      imageUrl: 'https://www.hervecuisine.com/wp-content/uploads/2020/04/recette-spaghetti-meatballs-730x520.jpg',
      ingredients: ['Boeuf haché',  'Parmesan râpé', 'Gousse d"ail', 'Persil frais']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe=> recipe.id === recipeId)
    };
  }
}
