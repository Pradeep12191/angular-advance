import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawPiechartComponent } from './raw-piechart.component';

describe('RawPiechartComponent', () => {
  let component: RawPiechartComponent;
  let fixture: ComponentFixture<RawPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
