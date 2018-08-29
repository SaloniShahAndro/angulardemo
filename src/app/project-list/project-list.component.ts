import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectService } from "../project.service";
import { Project } from "../model/project.model";
import { PagerService } from '../pager.service';
import { AlertService } from "../alert.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public users: Project[];

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  p: number = 1;
  constructor(private router: Router, private projectService: ProjectService, private pagerService: PagerService, private alertService: AlertService) { }

  ngOnInit() {
    let userId = localStorage.getItem("loginUserId");
    this.projectService.getProjects(+userId)
      .subscribe(
      data => {
        this.users = data
      },
      err => console.log(err)
      );
  }

  editProject(project: Project): void {
    localStorage.removeItem("editProjectId");
    localStorage.setItem("editProjectId", project.id.toString());   
    this.router.navigate(['update-project/'+project.id]);  
  };

  deleteProject(user: Project): void {
    this.projectService.deleteProject(user.id)
      .subscribe(data => {
        if (confirm("Are you sure to delete " + user.name)) {
          this.users = this.users.filter(u => u !== user);
            this.alertService.success("Project succesfully Deleted");
        
        }
      })
  };
}
