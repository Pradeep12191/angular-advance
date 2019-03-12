import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControlDialogComponent } from './add-control-dialog.component';

describe('AddControlDialogComponent', () => {
  let component: AddControlDialogComponent;
  let fixture: ComponentFixture<AddControlDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddControlDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddControlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
