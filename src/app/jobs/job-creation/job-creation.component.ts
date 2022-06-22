import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation.component.html',
  styleUrls: ['./job-creation.component.scss', '../jobs.scss'],
  animations: [
    trigger('slideJobSteps', [
      state("incomplete", style({
        transform: "translateX(-100%)"
      })),
      state("inProgress", style({
        transform: "translateX(0%)"
      })),
      state("complete", style({
        transform: "translateX(100%)"
      })),
      transition("incomplete => inProgress", [
        animate('200ms ease-in', style({
          transform: "translateX(0%)"
        }))
      ]),
      transition("inProgress => complete", [
        animate('200ms ease-in', style({
          transform: "translateX(100%)"
        }))
      ])
    ])
  ]
})
export class JobCreationComponent implements OnInit {

  jobCreationStep = [];

  constructor() { }

  ngOnInit(): void {
    // this.jobCreationStep["source"] = "inProgress";
    // this.jobCreationStep["destination"] = "incomplete";
    // this.jobCreationStep["schedule"] = "incomplete";
  }

}