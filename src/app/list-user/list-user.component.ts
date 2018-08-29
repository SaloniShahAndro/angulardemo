import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../model/user.model";
import { PagerService } from '../pager.service';
import { AlertService } from "../alert.service";


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public users: User[];

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private router: Router, private userService: UserService, private pagerService: PagerService, private alertService: AlertService) { }

  ngOnInit() {
    let userId = localStorage.getItem("loginUserId");
    console.log(">>>userid>>>>",userId)
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

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(data => {
        if (confirm("Are you sure to delete " + user.firstName)) {
          this.users = this.users.filter(u => u !== user);
        //  setTimeout(() => {
            this.alertService.success("User succesfully Deleted");
          //}, 1000);
        }
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());   
    this.router.navigate(['edit-user']);  
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

  // setPage(page: number) {
  //   // get pager object from service
  //   this.pager = this.pagerService.getPager(this.allItems.length, page);

  //   // get current page of items
  //   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // }
  p: number = 1;

 
}
