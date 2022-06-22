import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import { JobCreationRoutingModule } from './job-creation-routing.module';
import { JobCreationComponent } from './job-creation.component';
import { JobProgressComponent } from './job-progress/job-progress.component';
import { JobSourceComponent } from './job-steps/job-connection/job-connection.component';


@NgModule({
  declarations: [
    JobCreationComponent,
    JobProgressComponent,
    JobSourceComponent
  ],
  imports: [
    CommonModule,
    JobCreationRoutingModule,
    MatSelectModule
  ]
})
export class JobCreationModule { }