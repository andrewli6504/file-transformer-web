import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { JobCreationRoutingModule } from './job-creation-routing.module';
import { JobCreationComponent } from './job-creation.component';
import { JobProgressComponent } from './job-progress/job-progress.component';
import { JobConnectionComponent } from './job-steps/job-connection/job-connection.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { JobSourceComponent } from './job-steps/job-source/job-source.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    JobCreationComponent,
    JobProgressComponent,
    JobConnectionComponent,
    JobSourceComponent,
  ],
  imports: [
    CommonModule,
    JobCreationRoutingModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class JobCreationModule { }