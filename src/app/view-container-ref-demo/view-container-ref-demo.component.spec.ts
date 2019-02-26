import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerRefDemoComponent } from './view-container-ref-demo.component';

describe('ViewContainerRefDemoComponent', () => {
  let component: ViewContainerRefDemoComponent;
  let fixture: ComponentFixture<ViewContainerRefDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContainerRefDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContainerRefDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
