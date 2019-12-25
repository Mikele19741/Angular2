import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistroyChartComponent } from './histroy-chart.component';

describe('HistroyChartComponent', () => {
  let component: HistroyChartComponent;
  let fixture: ComponentFixture<HistroyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistroyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistroyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
