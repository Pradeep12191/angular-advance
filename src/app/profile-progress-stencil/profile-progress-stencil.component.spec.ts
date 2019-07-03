import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProgressStencilComponent } from './profile-progress-stencil.component';

describe('ProfileProgressStencilComponent', () => {
  let component: ProfileProgressStencilComponent;
  let fixture: ComponentFixture<ProfileProgressStencilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProgressStencilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProgressStencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
