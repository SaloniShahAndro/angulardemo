import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AlertService } from "../alert.service";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm: FormGroup;
  filesToUpload: Array<File> = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private alertService:AlertService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      created_at:[''],
      updated_at:[''],
      deleted_at:[''],
      images: ['', Validators.required],
    });
    this.userService.getUserById(+userId)
      .subscribe(data => {
        console.log(">>>data in edit-user>>>>", data)
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    console.log(">>>this.editform>>>>>",this.editForm.value)
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
      data => {
        this.alertService.success("User succesfully Updated");
        setTimeout(() => {
          this.router.navigate(['list-user']);
        }, 1000);
      },
      error => {
        alert(error);
      });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
