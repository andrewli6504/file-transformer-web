import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDestinationComponent } from './job-destination.component';

describe('JobDestinationComponent', () => {
  let component: JobDestinationComponent;
  let fixture: ComponentFixture<JobDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
