import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  animations: [
    trigger('progressSteps', [
      state("inProgress", style({
        "flex": "1",
        "background-color": "green"
      })),
      state("incomplete", style({
        "flex": "0",
        "background-color": "lightgrey"
      })),
      state("complete", style({
        "flex": "0",
        "background-color": "lightgrey"
      })),
      transition("inProgress <=> *", [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class ProgressBarComponent implements OnInit {

  @Input() progressSteps: Map<string, string>;
  @Input() progressKeys: Array<string>;
  totalWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.totalWidth = this.progressKeys.length * 16 + 32;
  }

}
