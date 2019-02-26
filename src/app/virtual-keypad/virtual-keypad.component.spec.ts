import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualKeypadComponent } from './virtual-keypad.component';

describe('VirtualKeypadComponent', () => {
  let component: VirtualKeypadComponent;
  let fixture: ComponentFixture<VirtualKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
