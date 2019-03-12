import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropDemoComponent } from './cdk-drag-drop-demo.component';

describe('CdkDragDropDemoComponent', () => {
  let component: CdkDragDropDemoComponent;
  let fixture: ComponentFixture<CdkDragDropDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkDragDropDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDragDropDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
