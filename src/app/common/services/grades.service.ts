import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  constructor(private apiService: ApiService) {}

  getGrade(id: number): Observable<any> {
    return this.apiService.get(`grades/${id}`);
  }

  getAllGrades(): Observable<any> {
    return this.apiService.get(`grades`);
  }

  createGrade(grade: any): Observable<any> {
    return this.apiService.post<any>(`grades`, grade);
  }

  updateGrade(id: number, grade: any): Observable<any> {
    return this.apiService.put(`grades/${id}`, grade);
  }

  deleteGrade(id: number): Observable<any> {
    return this.apiService.delete(`grades/${id}`);
  }

  getGradesByStudent(id: number) {
    return this.apiService.get<any[]>(`grades/student/${id}`);
  }
}
