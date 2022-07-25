import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionCreationRoutingModule } from './connection-creation-routing.module';
import { ConnectionCreationComponent } from './connection-creation.component';
import { ComponentModule } from 'src/app/common/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ConnectionTypeComponent } from './connection-steps/connection-type/connection-type.component';


@NgModule({
  declarations: [
    ConnectionCreationComponent,
    ConnectionTypeComponent
  ],
  imports: [
    CommonModule,
    ConnectionCreationRoutingModule,
    ComponentModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ConnectionCreationModule { }
