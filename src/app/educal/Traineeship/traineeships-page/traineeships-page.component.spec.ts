import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeshipsPageComponent } from './traineeships-page.component';

describe('TraineeshipsPageComponent', () => {
  let component: TraineeshipsPageComponent;
  let fixture: ComponentFixture<TraineeshipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeshipsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeshipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
