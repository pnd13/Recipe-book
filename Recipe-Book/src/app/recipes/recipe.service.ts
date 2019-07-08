import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe(
        'Tasty Schnitzel', 
        'Super schnitzel!', 
        'https://cdn.shopify.com/s/files/1/1496/2102/articles/DSC_0019_Kopie_2_7a7857cf-a261-4fe6-a86e-ae0259399e39_1400x.progressive.jpg?v=1531143069',
        [
            new Ingredient('Meat',1),
            new Ingredient('French fries', 20)
        ]),
        new Recipe(
        'Burger',
        'This is simpy a burger',
        'https://media.mnn.com/assets/images/2017/06/sonic_mushroom_beef_burger.jpg.653x0_q80_crop-smart.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
        ];

        constructor(private slService: ShoppingListService){

        }
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}