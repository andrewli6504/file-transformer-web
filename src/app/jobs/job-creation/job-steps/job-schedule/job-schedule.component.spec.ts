import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobScheduleComponent } from './job-schedule.component';

describe('JobScheduleComponent', () => {
  let component: JobScheduleComponent;
  let fixture: ComponentFixture<JobScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
