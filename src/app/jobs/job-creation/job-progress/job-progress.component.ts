import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['./job-progress.component.scss']
})
export class JobProgressComponent implements OnInit {

  steps: string[];
  currentStep: string;
  

  constructor() { }

  ngOnInit(): void {
    this.steps = ["Step 1", "Step 2"];
  }

}
