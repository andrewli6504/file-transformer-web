import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCreationComponent } from './project-creation/project-creation.component';
import { ComponentModule } from '../common/component.module';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectNavbarComponent } from './project-navbar/project-navbar.component';


@NgModule({
  declarations: [
    ProjectCreationComponent,
    ProjectPageComponent,
    ProjectNavbarComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ComponentModule,
  ]
})
export class ProjectsModule { }
