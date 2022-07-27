import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-source',
  templateUrl: './job-source.component.html',
  styleUrls: ['./job-source.component.scss', '../../../jobs.scss']
})
export class JobSourceComponent implements OnInit {

  @Input() parentForm: FormGroup;
  sourceType: string;

  constructor() { }

  ngOnInit(): void {}

  initializeSourceForm() {
    this.sourceType = this.parentForm.get("connections").get("source").value.connectionType;
    if(this.sourceType == "S3") {
      this.sourceType = "file";
      
      this.parentForm.get("source").get("folderPath").setValidators([Validators.required]);
      this.parentForm.get("source").get("fileName").setValidators([Validators.required]);
      this.parentForm.get("source").get("fileType").setValidators([Validators.required]);
      this.parentForm.get("source").get("delimiter").setValidators([Validators.required]);

      this.parentForm.get("source").get("folderPath").updateValueAndValidity();
      this.parentForm.get("source").get("fileName").updateValueAndValidity();
      this.parentForm.get("source").get("fileType").updateValueAndValidity();
      this.parentForm.get("source").get("delimiter").updateValueAndValidity();
    }
    else {
      this.sourceType = "sql";

      this.parentForm.get("source").get("sqlTableName").setValidators([Validators.required]);
      this.parentForm.get("source").get("sqlTableAction").setValidators([Validators.required]);
      
      this.parentForm.get("source").get("sqlTableName").updateValueAndValidity();
      this.parentForm.get("source").get("sqlTableAction").updateValueAndValidity();
    }
  }
}
