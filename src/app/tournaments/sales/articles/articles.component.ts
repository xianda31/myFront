import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  tiles: Tile[] = [
    {text: 'Carte', cols: 1, rows: 1, color: 'lightblue'},
    {text: '3€', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '4€', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'gratuit', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
}
