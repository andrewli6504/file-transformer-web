import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobConnectionComponent } from './job-connection.component';

describe('JobConnectionComponent', () => {
  let component: JobConnectionComponent;
  let fixture: ComponentFixture<JobConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
