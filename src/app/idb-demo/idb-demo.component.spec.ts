import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdbDemoComponent } from './idb-demo.component';

describe('IdbDemoComponent', () => {
  let component: IdbDemoComponent;
  let fixture: ComponentFixture<IdbDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdbDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdbDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
