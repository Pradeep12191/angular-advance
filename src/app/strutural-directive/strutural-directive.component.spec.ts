import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StruturalDirectiveComponent } from './strutural-directive.component';

describe('StruturalDirectiveComponent', () => {
  let component: StruturalDirectiveComponent;
  let fixture: ComponentFixture<StruturalDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StruturalDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StruturalDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
