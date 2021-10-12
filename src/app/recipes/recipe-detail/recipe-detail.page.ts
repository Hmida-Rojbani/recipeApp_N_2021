import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  constructor(private recipeServices: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('Recipes Details on Init');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        this.router.navigate(['/recipes']);
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeServices.getRecipe(recipeId);
    });

  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Are you sure ?',
      message: 'Do your really want to delete the recipe ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler : () => {
            this.recipeServices.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertElm => alertElm.present());
  }

  ngOnDestroy(){
    console.log('Recipes Details on Destroy');
  }

  ionViewWillEnter(){
    console.log('Recipes Details on WillEnter');
  }

  ionViewDidEnter(){
    console.log('Recipes Details on DidEnter');
  }

  ionViewWillLeave(){
    console.log('Recipes Details on WillLeave');
  }

  ionViewDidLeave(){
    console.log('Recipes Details on DidLeave');
  }

}
