import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RemoteConnection } from 'src/app/models/remoteConnection';

@Component({
  selector: 'app-job-connection',
  templateUrl: './job-connection.component.html',
  styleUrls: ['./job-connection.component.scss', '../../../jobs.scss']
})
export class JobConnectionComponent implements OnInit {

  @Input() parentForm: FormGroup;

  public remoteConnections: RemoteConnection[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getRemoteConnections();
    console.log(this.remoteConnections);
  }

  getRemoteConnections() {
    this.remoteConnections.push({
      "_id": "1",
      "createdBy": "andrew",
      "createdDate": "2022-06-23",
      "updatedDate": "2022-06-23",
      "connectionName": "S3 Test",
      "connectionType": "S3"
    });
    this.remoteConnections.push({
      "_id": "2",
      "createdBy": "andrew",
      "createdDate": "2022-06-23",
      "updatedDate": "2022-06-23",
      "connectionName": "SQL Test",
      "connectionType": "SQL"
    });
  }
}
