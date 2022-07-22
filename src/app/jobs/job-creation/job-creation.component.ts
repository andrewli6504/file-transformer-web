import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';
import { JobSourceComponent } from './job-steps/job-source/job-source.component';
import { JobDestinationComponent } from './job-steps/job-destination/job-destination.component';
import { JobScheduleComponent } from './job-steps/job-schedule/job-schedule.component';
import { TransformerApiService } from 'src/app/services/transformer-api/transformer-api.service';

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation.component.html',
  styleUrls: ['./job-creation.component.scss', '../jobs.scss'],
  animations: [
    trigger('slideJobSteps', [
      state("incomplete", style({
        transform: "translateX(220%)",
        // backgroundColor: "blue"
      })),
      state("inProgress", style({
        transform: "translateX(0%)",
        // backgroundColor: "white"
      })),
      state("complete", style({
        transform: "translateX(-220%)",
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
    private transformerApiService: TransformerApiService,
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
        taskName: new FormControl("", [Validators.required]),
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

  isValid() {
    if(this.jobCreationStep['connections'] == 'inProgress') {
      return this.jobCreationForm.controls['connections'].valid;
    }
    else if(this.jobCreationStep['source'] == 'inProgress') {
      return this.jobCreationForm.controls['source'].valid;
    }
    else if(this.jobCreationStep['destination'] == 'inProgress') {
      return this.jobCreationForm.controls['destination'].valid;
    }
    else if(this.jobCreationStep['schedule'] == 'inProgress') {
      return this.jobCreationForm.controls['schedule'].valid;
    }
    return false;
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
      this.createJob();
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

  createJob() {
    var connections = this.jobCreationForm.get("connections");
    var source = this.jobCreationForm.get("source");
    var destination = this.jobCreationForm.get("destination");
    var schedule = this.jobCreationForm.get("schedule");
    var jobRequest = {
      job: {
        jobName: connections.get("taskName").value,
        projectName: "Temp Project Name",
        createdBy: "Temp User",
        lastModifiedBy: "Temp User",
        source: {
          sqlTableName:   source.get("sqlTableName").value,
          sqlTableAction: source.get("sqlTableAction").value,
          folderPath:     source.get("folderPath").value,
          fileName:       source.get("fileName").value,
          fileType:       source.get("fileType").value,
          delimiter:      source.get("delimiter").value,
          hasHeader:      source.get("hasHeader").value,
        },
        destination: {
          sqlTableName:   destination.get("sqlTableName").value,
          sqlTableAction: destination.get("sqlTableAction").value,
          folderPath:     destination.get("folderPath").value,
          fileName:       destination.get("fileName").value,
          fileType:       destination.get("fileType").value,
          delimiter:      destination.get("delimiter").value,
          mergeOutput:    destination.get("mergeOutput").value,
        },
        transform: [{
          source: connections.get("source").value["_id"]
        }, {
          destination: connections.get("destination").value["_id"]
        }],
        frequency: schedule.get("frequency").value,
        time:      this.convertTime(schedule.get("time").value),
        startDate: schedule.get("datePicker").get("start").value,
        endDate:   schedule.get("datePicker").get("end").value,
      },
      projectId: 1
    };
    console.log(jobRequest);

    this.transformerApiService.createJob(jobRequest).subscribe(resp => {
      console.log(resp);
    });
  }

  //Converts time in the format of HH:MM AM/PM into the format HH:MM:SS (24hr)
  convertTime(time: string) {
    //AM or PM
    let period = time.slice(time.indexOf(" "));
    let hour = time.slice(0, time.indexOf(":"));
    let minute = time.slice(time.indexOf(":") + 1, time.indexOf(" "));
    if(period == "PM") {
      hour += 12;
    }
    if(hour.length == 1) {
      hour = "0" + hour;
    }
    return hour + ":" + minute + ":00";
  }
}