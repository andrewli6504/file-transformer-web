import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSourceComponent } from './job-source.component';

describe('JobSourceComponent', () => {
  let component: JobSourceComponent;
  let fixture: ComponentFixture<JobSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
