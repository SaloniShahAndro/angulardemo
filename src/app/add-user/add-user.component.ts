import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { AlertService } from '../alert.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private alertService: AlertService, private http: HttpClient) { }

  addForm: FormGroup;
  url = '';

  filesToUpload: Array<File> = [];
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', (Validators.required, Validators.email)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      image: ['', Validators.required],
      pwd:['',Validators.required]
    });

  }

  onSubmit() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i], files[i]['name']);
    }
    formData.append("email", this.addForm.value.email);
    formData.append("firstName", this.addForm.value.firstName);
    formData.append("lastName", this.addForm.value.lastName);
    formData.append("pwd", this.addForm.value.pwd);
    

    this.userService.createUser(formData)
      .subscribe(data => {
        console.log(">>>>data add user>>>>>>", data)
        this.alertService.success("User succesfully added");

        setTimeout(() => {
          this.router.navigate(['list-user']);
        }, 1000);
      });
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i], files[i]['name']);
    }
    this.http.post('http://localhost:4555/multiplepics', formData)
      .subscribe(files => console.log('files', files))
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
