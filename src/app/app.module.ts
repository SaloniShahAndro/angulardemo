import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { routing } from './/app-routing.module';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./user.service";
import { AuthService } from 'src/app/auth.service';
import { PagerService } from "./pager.service";


import { FormsModule } from '@angular/forms';
import {FilterPipe} from './filterPipe'

import { NgxPaginationModule } from 'ngx-pagination';
import { AlertComponent } from './alert/alert.component'; // <-- import the module
import { AlertService } from './alert.service'
import { SidebarModule } from 'ng-sidebar';

import {MatSidenavModule,MatToolbarModule,MatIconModule,MatTabsModule,MatCardModule,MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from 'src/app/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    FilterPipe,
    AlertComponent,
    ContactusComponent,
    AboutusComponent,
    ProjectComponent,
    ProjectListComponent,
    EditProjectComponent,
    LogoutComponent ,    
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [UserService,AuthService,AlertService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
