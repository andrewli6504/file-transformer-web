import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-destination',
  templateUrl: './job-destination.component.html',
  styleUrls: ['./job-destination.component.scss', '../../../jobs.scss']
})
export class JobDestinationComponent implements OnInit {

  @Input() parentForm: FormGroup;
  destinationType: string;

  constructor() { }

  ngOnInit(): void {}

  initializeDestinationForm() {
    this.destinationType = this.parentForm.get("connections").get("destination").value.connectionType;
    if(this.destinationType == "S3") {
      this.destinationType = "file";
      
      this.parentForm.get("destination").get("folderPath").setValidators([Validators.required])
      this.parentForm.get("destination").get("fileName").setValidators([Validators.required])
      this.parentForm.get("destination").get("fileType").setValidators([Validators.required])
      this.parentForm.get("destination").get("delimiter").setValidators([Validators.required])

      this.parentForm.get("destination").get("folderPath").updateValueAndValidity();
      this.parentForm.get("destination").get("fileName").updateValueAndValidity();
      this.parentForm.get("destination").get("fileType").updateValueAndValidity();
      this.parentForm.get("destination").get("delimiter").updateValueAndValidity();
    }
    else {
      this.destinationType = "sql";

      this.parentForm.get("destination").get("sqlTableName").setValidators([Validators.required])
      this.parentForm.get("destination").get("sqlTableAction").setValidators([Validators.required])
      
      this.parentForm.get("destination").get("sqlTableName").updateValueAndValidity();
      this.parentForm.get("destination").get("sqlTableAction").updateValueAndValidity();
    }
  }
}
