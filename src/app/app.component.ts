import { Component,OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { UserService } from "./user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  private _opened: boolean = false;
  user : any
  userId = localStorage.getItem("loginUserId");
  constructor(private alertService: AlertService,private userService:UserService) { }
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnInit(){
     this.userService.getUsers().subscribe(data=>{
      this.user = data
    })
  }
}
