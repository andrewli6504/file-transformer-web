import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-schedule',
  templateUrl: './job-schedule.component.html',
  styleUrls: ['./job-schedule.component.scss', '../../../jobs.scss']
})
export class JobScheduleComponent implements OnInit {

  @Input() parentForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }
}
