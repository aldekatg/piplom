import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ControlContainer} from '@angular/forms';
import {Router} from '@angular/router';

export interface Transaction {
  item: string;
  cost: number;
  factCost: number;
}

@Component({
  selector: 'app-cotl-calc',
  templateUrl: './cotl-calc.component.html',
  styleUrls: ['./cotl-calc.component.css']
})
export class CotlCalcComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  displayedColumns: string[] = ['item', 'cost', 'factCost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4, factCost: 3},
    {item: 'Towel', cost: 5, factCost: 3},
    {item: 'Frisbee', cost: 2, factCost: 3},
    {item: 'Sunscreen', cost: 4, factCost: 3},
    {item: 'Cooler', cost: 25, factCost: 3},
    {item: 'Swim suit', cost: 15, factCost: 3},
  ];

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  getTotalFactCost() {
    return this.transactions.map(t => t.factCost).reduce((acc, value) => acc + value, 0);
  }

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  btnBack() {
    this.router.navigate(['home']);
  }
}
