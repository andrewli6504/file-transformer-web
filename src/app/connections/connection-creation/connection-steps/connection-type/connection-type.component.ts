import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connection-type',
  templateUrl: './connection-type.component.html',
  styleUrls: ['./connection-type.component.scss']
})
export class ConnectionTypeComponent implements OnInit {

  @Input() parentForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
