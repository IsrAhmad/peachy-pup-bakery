import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  subscription:Subscription = new Subscription;
  recipeList: any[] = [];

  constructor(private _RecipesService:RecipesService) {}



  ngOnInit(): void {
    console.log('Home ngOnInit');
    this.subscription = this._RecipesService.getRecipes().subscribe({
      next:(response) => this.recipeList = response.meals
    })

}

}
