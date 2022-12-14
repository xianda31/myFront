import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Article, ArticleOption } from "src/app/shop/models/shop.model"

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})



export class ShopItemComponent implements OnInit {

  @Input() article !: Article;
  selectedOptionName: string = 'aucune';
  selectedOptionPrice: number = 0;
  selectionText: string = '';

  ngOnInit() {

  }

  onChange(option: ArticleOption) {

    this.selectedOptionPrice = (this.selectedOptionName !== option.name ? option.price : 0);
    this.selectedOptionName = (this.selectedOptionName !== option.name ? option.name : 'aucune');
    this.selectionText = this.selectedOptionName
      + ' ('
      + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(this.selectedOptionPrice)
      + ')';

  }
}
