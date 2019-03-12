import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAnimationDemoComponent } from './image-animation-demo.component';

describe('ImageAnimationDemoComponent', () => {
  let component: ImageAnimationDemoComponent;
  let fixture: ComponentFixture<ImageAnimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
