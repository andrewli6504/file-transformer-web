import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-schedule',
  templateUrl: './job-schedule.component.html',
  styleUrls: ['./job-schedule.component.scss', '../../../jobs.scss']
})
export class JobScheduleComponent implements OnInit {

  @Input() parentForm: FormGroup;
  active: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.active = false;
  }

  initializeScheduleForm() {
    this.parentForm.get("schedule").get("datePicker").get("start").setValidators([Validators.required]);
    this.parentForm.get("schedule").get("datePicker").get("end").setValidators([Validators.required]);
    this.parentForm.get("schedule").get("frequency").setValidators([Validators.required]);
    this.parentForm.get("schedule").get("time").setValidators([Validators.required]);
    
    this.parentForm.get("schedule").get("datePicker").get("start").updateValueAndValidity();
    this.parentForm.get("schedule").get("datePicker").get("end").updateValueAndValidity();
    this.parentForm.get("schedule").get("frequency").updateValueAndValidity();
    this.parentForm.get("schedule").get("time").updateValueAndValidity();

    this.active = true;
  }
}
