import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotlCalcComponent } from './cotl-calc.component';

describe('CotlCalcComponent', () => {
  let component: CotlCalcComponent;
  let fixture: ComponentFixture<CotlCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotlCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotlCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
