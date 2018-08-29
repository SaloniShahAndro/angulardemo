import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { Router } from "@angular/router";
import { Project } from "../model/project.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AlertService } from "../alert.service";



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  user: Project;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private projectService: ProjectService, private alertService:AlertService) { }


  ngOnInit() {
    let userId = localStorage.getItem("editProjectId");
    let projectuserId = localStorage.getItem("loginUserId");

    console.log(">>>userId",userId);
    console.log(">>>projectuserId",projectuserId)

    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
       user_id:projectuserId,
      created_at:[''],
      updated_at:[''],
      deleted_at:[''],
      
    });
    this.projectService.getProjectById(+userId)
      .subscribe(data => {
        console.log(">>>data in edit-user>>>>", data)
        this.editForm.setValue(data);
      },
        err => console.log(err)
    
      );
  }

  onSubmit() {
    console.log(">>>this.editform>>>>>",this.editForm.value)
    this.projectService.updateProject(this.editForm.value)
      .pipe(first())
      .subscribe(
      data => {
        this.alertService.success("Project succesfully Updated");
        setTimeout(() => {
          this.router.navigate(['project/'+localStorage.getItem("loginUserId")]);
        }, 1000);
      },
      error => {
        alert(error);
      });
  }

}
