import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraineeshipComponent } from './add-traineeship.component';

describe('AddTraineeshipComponent', () => {
  let component: AddTraineeshipComponent;
  let fixture: ComponentFixture<AddTraineeshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTraineeshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTraineeshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
