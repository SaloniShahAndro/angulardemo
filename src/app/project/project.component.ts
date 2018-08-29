import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProjectService } from "../project.service";
import { Router } from "@angular/router";
import { AlertService } from '../alert.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private projectService: ProjectService,private http: HttpClient,private alertService: AlertService) { }
  addForm: FormGroup;
  ngOnInit() {
    let userId = localStorage.getItem("loginUserId");

    this.addForm = this.formBuilder.group({
      
      name: ['', (Validators.required)],
      description: ['', Validators.required],
      user_id:[userId]
    });

  }
  onSubmit() {    
    this.projectService.createProject(this.addForm.value)
      .subscribe(data => {
        this.alertService.success("Project succesfully added");
        setTimeout(() => {
          this.router.navigate(['project/'+localStorage.getItem("loginUserId")]);
        }, 1000);
      });
  }

}
