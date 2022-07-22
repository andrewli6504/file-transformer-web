import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionCreationRoutingModule } from './connection-creation-routing.module';
import { ConnectionCreationComponent } from './connection-creation.component';


@NgModule({
  declarations: [
    ConnectionCreationComponent
  ],
  imports: [
    CommonModule,
    ConnectionCreationRoutingModule
  ]
})
export class ConnectionCreationModule { }
