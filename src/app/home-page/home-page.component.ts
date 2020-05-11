import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: number;
  temp: number;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Продукция, тг', weight: 1.0079, symbol: 42508, temp: 126.1},
  {position: 2.1, name: 'Промышленно-производственнй персонал, чел.', weight: 24002, symbol: 24440, temp: 101.67},
  {position: 2.2, name: 'Оплата труда с начислениями', weight: 9410, symbol: 11518, temp: 127},
  {position: 3, name: 'Материальные затраты, тг', weight: 39012, symbol: 48654, temp: 117.05},
  {position: 4.1, name: 'Основные производственные средства, тг.', weight: 10811, symbol: 10166, temp: 153},
  {position: 4.2, name: 'Амортизация, тг.', weight: 120107, symbol: 16952, temp: 78.71},
  {position: 5, name: 'Оборотные средства, тг.', weight: 40067, symbol: 38294, temp: 124.031},
  {position: 6.1, name: 'Производительность труда, тг.', weight: 1599.94, symbol: 1746.21, temp: 108.96},
  {position: 6.2, name: 'Продукция на 1 тг. оплаты труда, тг', weight: 18.9984, symbol: 13.69, temp: 99.24},
  {position: 7, name: 'Материалоотдача, тг.', weight: 20.1797, symbol: 41.84, temp: 112.97},
  {position: 8, name: 'Фондоотдача, тг.', weight: 38.84, symbol: 41.84, temp: 107.97},
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'temp'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }
}
