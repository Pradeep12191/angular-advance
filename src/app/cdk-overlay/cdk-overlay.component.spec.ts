import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkOverlayComponent } from './cdk-overlay.component';

describe('CdkOverlayComponent', () => {
  let component: CdkOverlayComponent;
  let fixture: ComponentFixture<CdkOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
