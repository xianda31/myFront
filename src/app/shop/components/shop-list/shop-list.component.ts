import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Article } from '../../models/shop.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})

export class ShopListComponent implements OnInit{

  articles !: Article[];
  constructor (private shpService: ShopService) { }

  ngOnInit(): void {
    this.articles = this.shpService.getArticles() ;
  }

}
