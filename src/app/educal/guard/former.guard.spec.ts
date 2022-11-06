import { TestBed } from '@angular/core/testing';

import { FormerGuard } from './former.guard';

describe('FormerGuard', () => {
  let guard: FormerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
