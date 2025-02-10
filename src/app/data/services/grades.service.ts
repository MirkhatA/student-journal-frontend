import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private endpoint = '/grades';

  constructor(private api: ApiService) {}

  getGrade(id: number): Observable<any> {
    return this.api.get(`${this.endpoint}/${id}`);
  }

  getAllGrades(): Observable<any> {
    return this.api.get(`${this.endpoint}`);
  }

  createGrade(grade: any): Observable<any> {
    return this.api.post(`${this.endpoint}`, grade);
  }

  updateGrade(id: number, grade: any): Observable<any> {
    return this.api.put(`${this.endpoint}/${id}`, grade);
  }

  deleteGrade(id: number): Observable<any> {
    return this.api.delete(`${this.endpoint}/${id}`);
  }
}
