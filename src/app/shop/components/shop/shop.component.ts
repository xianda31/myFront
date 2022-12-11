import { Component } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {ArticleOption} from "src/app/shop/models/shop.model"
import { Article } from '../../models/shop.model';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {


  articles: Article[] = [
    {
      genericName:'Adhésion',
      options: [{name: 'Adhésion individuelle', price:32}, {name: 'Adhésion couple', price:27}, {name: 'Adhésion offerte', price:0}]
    },
    {
      genericName:'Licence',
      options: [{name: 'Licence FFB', price:40}]
    },
    {
      genericName:'Carte',
      options: [{name: 'Carte normale', price:30}, {name: 'Carte offerte', price:0}]
    },
    {
      genericName:'Cours (trimestre)',
      options: [{name: 'Perf complet', price:70}, {name: 'Perf réduit', price:50},{name: 'Initiation', price:20}]
    },
    {
      genericName:'Librairie',
      options: [{name: 'Categorie A', price:20}, {name: 'Categorie B', price:30}]
    },

  ]

  }
