import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor(private apiService: ApiService) {}

  getGroup(id: number): Observable<any> {
    return this.apiService.get(`groups/${id}`);
  }

  getAllGroups(): Observable<any> {
    return this.apiService.get(`groups`);
  }

  createGroup(group: any): Observable<any> {
    return this.apiService.post(`groups`, group);
  }

  updateGroup(id: number, group: any): Observable<any> {
    return this.apiService.put(`groups/${id}`, group);
  }

  deleteGroup(id: number): Observable<any> {
    return this.apiService.delete(`groups/${id}`);
  }
}
