import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { JobCreationRoutingModule } from './job-creation-routing.module';
import { JobCreationComponent } from './job-creation.component';
import { JobProgressComponent } from './job-progress/job-progress.component';
import { JobConnectionComponent } from './job-steps/job-connection/job-connection.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { JobSourceComponent } from './job-steps/job-source/job-source.component';
import { MatInputModule } from '@angular/material/input';
import { JobDestinationComponent } from './job-steps/job-destination/job-destination.component';
import { JobScheduleComponent } from './job-steps/job-schedule/job-schedule.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    JobCreationComponent,
    JobProgressComponent,
    JobConnectionComponent,
    JobSourceComponent,
    JobDestinationComponent,
    JobScheduleComponent,
  ],
  imports: [
    CommonModule,
    JobCreationRoutingModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ]
})
export class JobCreationModule { }