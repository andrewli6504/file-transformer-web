import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';
import { JobSourceComponent } from './job-steps/job-source/job-source.component';
import { JobDestinationComponent } from './job-steps/job-destination/job-destination.component';
import { JobScheduleComponent } from './job-steps/job-schedule/job-schedule.component';

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation.component.html',
  styleUrls: ['./job-creation.component.scss', '../jobs.scss'],
  animations: [
    trigger('slideJobSteps', [
      state("incomplete", style({
        transform: "translateX(120%)",
        // backgroundColor: "blue"
      })),
      state("inProgress", style({
        transform: "translateX(0%)",
        // backgroundColor: "white"
      })),
      state("complete", style({
        transform: "translateX(-120%)",
        // backgroundColor: "red"
      })),
      transition("incomplete <=> inProgress", [
        animate('200ms ease-in')
      ]),
      transition("inProgress <=> complete", [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class JobCreationComponent implements OnInit {

  @ViewChild(JobSourceComponent) source: JobSourceComponent;
  @ViewChild(JobDestinationComponent) destination: JobDestinationComponent;
  @ViewChild(JobScheduleComponent) schedule: JobScheduleComponent;

  jobCreationStep = [];
  jobCreationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authApiService: AuthApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.jobCreationStep["connections"] = "inProgress";
    this.jobCreationStep["source"] = "incomplete";
    this.jobCreationStep["destination"] = "incomplete";
    this.jobCreationStep["schedule"] = "incomplete";
    this.initializeJobForm();
  }

  initializeJobForm() {
    this.jobCreationForm = this.formBuilder.group({
      connections: new FormGroup({
        source: new FormControl("", [Validators.required]),
        destination: new FormControl("", [Validators.required])
      }),
      source: new FormGroup({
        sqlTableName: new FormControl(),
        sqlTableAction: new FormControl(),
        folderPath: new FormControl(),
        fileName: new FormControl(),
        fileType: new FormControl(),
        delimiter: new FormControl(),
        hasHeader: new FormControl()
      }),
      destination: new FormGroup({
        sqlTableName: new FormControl(),
        sqlTableAction: new FormControl(),
        folderPath: new FormControl(),
        fileName: new FormControl(),
        fileType: new FormControl(),
        delimiter: new FormControl(),
        mergeOutput: new FormControl()
      }),
      schedule: new FormGroup({
        datePicker: new FormGroup({
          start: new FormControl("", [Validators.required]),
          end: new FormControl("", [Validators.required])
        }),
        frequency: new FormControl("", [Validators.required]),
        time: new FormControl("", [Validators.required])
      })
    })
  }

  onSubmit(button) {
    if(button == "next-button") {
      this.advanceForm();
    }
    else if(button == "back-button") {
      this.backForm();
    }
  }

  advanceForm() {
    if(this.jobCreationStep["connections"] == "inProgress") {
      this.jobCreationStep["connections"] = "complete";
      this.jobCreationStep["source"] = "inProgress"
      this.source.initializeSourceForm();
    }
    else if(this.jobCreationStep["source"] == "inProgress") {
      this.jobCreationStep["source"] = "complete";
      this.jobCreationStep["destination"] = "inProgress"
      this.destination.initializeDestinationForm();
    }
    else if(this.jobCreationStep["destination"] == "inProgress") {
      this.jobCreationStep["destination"] = "complete";
      this.jobCreationStep["schedule"] = "inProgress"
    }
    else if(this.jobCreationStep["schedule"] == "inProgress") {
      this.jobCreationStep["schedule"] = "complete";
      //TODO: Redirect to another page
    }
  }

  backForm() {
    if(this.jobCreationStep["source"] == "inProgress") {
      this.jobCreationStep["source"] = "incomplete";
      this.jobCreationStep["connections"] = "inProgress"
    }
    else if(this.jobCreationStep["destination"] == "inProgress") {
      this.jobCreationStep["destination"] = "incomplete";
      this.jobCreationStep["source"] = "inProgress"
    }
    else if(this.jobCreationStep["schedule"] == "inProgress") {
      this.jobCreationStep["schedule"] = "incomplete";
      this.jobCreationStep["destination"] = "inProgress"
    }
  }
}