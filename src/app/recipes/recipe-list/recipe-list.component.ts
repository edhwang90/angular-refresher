import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Simply a test", "https://th.bing.com/th/id/OIP.YixleAz2dzjXRd3FGfaIlwHaE7?pid=ImgDet&rs=1"),
    new Recipe("A Second Recipe", "Simply a test", "https://th.bing.com/th/id/R.228f96159f5cc6b1c3d1b548eb64644c?rik=YxtwFGdj%2fyo%2ffA&riu=http%3a%2f%2fchewtheworld.com%2fwp-content%2fuploads%2f2016%2f05%2falfredo-sauce-1.jpg&ehk=1p7wjBjGr1EAFsLNIJ2k%2fd8NebLkaSYnVqPSx42baEI%3d&risl=&pid=ImgRaw&r=0")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
