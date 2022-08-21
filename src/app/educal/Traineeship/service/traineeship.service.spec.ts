import { TestBed } from '@angular/core/testing';

import { TraineeshipService } from './traineeship.service';

describe('TraineeshipService', () => {
  let service: TraineeshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
