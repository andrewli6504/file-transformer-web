import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-connection',
  templateUrl: './job-connection.component.html',
  styleUrls: ['./job-connection.component.scss']
})
export class JobSourceComponent implements OnInit {

  remoteConnections: [];
  source: any;

  constructor() { }

  ngOnInit(): void {
  }

}
