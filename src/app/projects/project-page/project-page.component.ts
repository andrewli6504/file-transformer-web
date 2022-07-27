import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projectId: string;

  constructor(
    private route: ActivatedRoute,
  ) { 
    this.route.url.subscribe(url => {
      this.projectId = url[0].path;
    })
    console.log(this.projectId);
  }

  ngOnInit(): void {
  }
}
