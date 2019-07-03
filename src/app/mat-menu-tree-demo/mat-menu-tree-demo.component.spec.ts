import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuTreeDemoComponent } from './mat-menu-tree-demo.component';

describe('MatMenuTreeDemoComponent', () => {
  let component: MatMenuTreeDemoComponent;
  let fixture: ComponentFixture<MatMenuTreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMenuTreeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMenuTreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
