import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../model/user.model";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
      data => {
        this.users = data
        // this.allItems = data;
        // initialize to page 1
        //this.setPage(1)
      },
      err => console.log(err)
      );
  }

}
