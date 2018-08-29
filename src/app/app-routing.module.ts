import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent,canActivate:[AuthGuardService] },
  { path: 'list-user', component: ListUserComponent ,canActivate:[AuthGuardService] },
  { path: 'edit-user', component: EditUserComponent,canActivate:[AuthGuardService] },
  { path: '', component: LoginComponent },
  { path: 'aboutus', component:  AboutusComponent},
  { path: 'contactus', component: ContactusComponent },
  { path: 'project', component:ProjectComponent,canActivate:[AuthGuardService] },
  { path: 'project/:user_id', component:ProjectListComponent,canActivate:[AuthGuardService]},
  { path: 'update-project/:id', component:EditProjectComponent,canActivate:[AuthGuardService]},
  { path: 'logout', component:LogoutComponent},

];

export const routing = RouterModule.forRoot(routes);