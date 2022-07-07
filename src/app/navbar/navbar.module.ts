import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ProjectsCardComponent } from './cards/projects-card/projects-card.component';
import { SettingsCardComponent } from './cards/settings-card/settings-card.component';
import { HelpCardComponent } from './cards/help-card/help-card.component';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [
    NavbarComponent,
    ProjectsCardComponent,
    SettingsCardComponent,
    HelpCardComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
