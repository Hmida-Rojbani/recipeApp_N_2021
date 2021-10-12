import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipesServices: RecipeService) { }

  ngOnInit() {
    console.log('Recipes on Init');
  }

  ionViewWillEnter(){
    console.log('Recipes on WillEnter');
    this.recipes= this.recipesServices.getAllRecipes();
  }

  ionViewDidEnter(){
    console.log('Recipes on DidEnter');
  }

  ionViewWillLeave(){
    console.log('Recipes on WillLeave');
  }

  ionViewDidLeave(){
    console.log('Recipes on DidLeave');
  }

  ngOnDestroy(){
    console.log('Recipes on Destroy');
  }

}
