import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeshipTableComponent } from './traineeship-table.component';

describe('TraineeshipTableComponent', () => {
  let component: TraineeshipTableComponent;
  let fixture: ComponentFixture<TraineeshipTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeshipTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeshipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
