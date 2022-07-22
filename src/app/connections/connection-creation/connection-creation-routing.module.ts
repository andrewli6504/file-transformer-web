import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionCreationComponent } from './connection-creation.component';

const routes: Routes = [{ path: '', component: ConnectionCreationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionCreationRoutingModule { }
