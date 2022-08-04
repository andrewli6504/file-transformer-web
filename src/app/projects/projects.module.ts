import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCreationComponent } from './project-creation/project-creation.component';
import { ComponentModule } from '../common/component.module';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectNavbarComponent } from './project-navbar/project-navbar.component';
import { JobCreationModule } from '../jobs/job-creation/job-creation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { OnboardingCardComponent } from './onboarding-card/onboarding-card.component';


@NgModule({
  declarations: [
    ProjectCreationComponent,
    ProjectPageComponent,
    ProjectNavbarComponent,
    OnboardingCardComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ComponentModule,
    JobCreationModule,
    MatDialogModule,
  ]
})
export class ProjectsModule { }
