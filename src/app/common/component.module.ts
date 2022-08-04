import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './form-card/form-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    FormCardComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormCardComponent,
    ProgressBarComponent
  ]
})
export class ComponentModule { }
