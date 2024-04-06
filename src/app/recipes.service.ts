import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnInit {

  constructor(private _HttpClient:HttpClient) { }

  ngOnInit(): void {

  }

  getRecipes() {
    
  }

}
