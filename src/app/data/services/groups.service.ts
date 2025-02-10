import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private endpoint = '/groups';

  constructor(private api: ApiService) {}

  getGroup(id: number): Observable<any> {
    return this.api.get(`${this.endpoint}/${id}`);
  }

  getAllGroups(): Observable<any> {
    return this.api.get(`${this.endpoint}`);
  }

  createGroup(group: any): Observable<any> {
    return this.api.post(`${this.endpoint}`, group);
  }

  updateGroup(id: number, group: any): Observable<any> {
    return this.api.put(`${this.endpoint}/${id}`, group);
  }

  deleteGroup(id: number): Observable<any> {
    return this.api.delete(`${this.endpoint}/${id}`);
  }
}
