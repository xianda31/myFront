import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Article, ArticleOption } from '../services/shop.model';
import { ThemePalette } from '@angular/material/core';

export interface buttonChoice {
  iArticle: number;
  iOption: number}


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit{

  color: ThemePalette = "primary";

  // selectedOptionName: string = 'aucune';
  selectedOptionPrice: number = 0;
  selectionText: string = '';

  articles !: Article[];
  constructor (private shpService: ShopService) { }

  ngOnInit(): void {
    this.articles = this.shpService.getArticles() ;
  }

  onChange(event: any) {
    let choice = event.value as buttonChoice;
    this.selectionText = this.articles[choice.iArticle].genericName;
    + ' ('
    + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(this.articles[choice.iArticle].options[choice.iOption].price)
    + ')';

    console.log(this.selectionText);

  }
}
