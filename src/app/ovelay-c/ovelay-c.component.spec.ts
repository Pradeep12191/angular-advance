import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvelayCComponent } from './ovelay-c.component';

describe('OvelayCComponent', () => {
  let component: OvelayCComponent;
  let fixture: ComponentFixture<OvelayCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvelayCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvelayCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
