import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { JobCreationComponent } from 'src/app/jobs/job-creation/job-creation.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projectId: string;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { 
    this.route.url.subscribe(url => {
      this.projectId = url[0].path;
    })
  }

  ngOnInit(): void {
  }

  onClick() {
    const jobRef = this.dialog.open(JobCreationComponent, {
      width: "1320px",
      height: "720px",
      maxWidth: "90vw",
      maxHeight: "80vh",
      disableClose: false,
      position: {
        top: "90px"
      }
    });
  }
}
