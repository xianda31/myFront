import { Injectable, OnInit } from '@angular/core';
import { Article, Order } from '../models/shop.model';

@Injectable()
export class ShopService implements OnInit{
  private articleList !: Article[];
  private pickedList !: Order ;

  constructor() {
    this.articleList = [
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

    ] ;

   }


ngOnInit(): void {
}

  getArticles(): Article[] {
    return (this.articleList) ;
  };
}
