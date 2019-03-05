import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTableComponent } from './inline-table.component';

describe('InlineTableComponent', () => {
  let component: InlineTableComponent;
  let fixture: ComponentFixture<InlineTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
