import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Project} from "./model/project.model";
import { Observable, of } from 'rxjs';
const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*' })
 };
 

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:4555/project';
  getProjects(user_id:number) {
      return this.http.get<Project[]>(this.baseUrl+'/'+user_id);
    }

    // getProjects(user_id:number) {
    //   return this.http.post('http://localhost:4555/projects',user_id,httpOptions);
    // }
  
    getProjectById(id: number) {
      return this.http.get<Project>('http://localhost:4555/update-project' + '/' + id);
    }
  
    createProject(project: Project) {
      return this.http.post(this.baseUrl, project);
    }
  
    updateProject(project: Project) {
      return this.http.post('http://localhost:4555/update-project' + '/' + project.id, project);
    }
  
    deleteProject(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
  
}
