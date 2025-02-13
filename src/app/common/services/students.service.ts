import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private apiService: ApiService) {}

  getStudentsByGroup(groupId: number): Observable<any> {
    return this.apiService.get<any>(`students/group/${groupId}`);
  }

  getStudentById(id: number): Observable<any> {
    return this.apiService.get<any>(`students/${id}`);
  }

  getAllStudents(): Observable<any> {
    return this.apiService.get(`students`);
  }

  addStudent(student: {firstName: string, lastName: string, groupId: number}): Observable<any> {
    return this.apiService.post<any>(`students`, student);
  }

  updateStudent(id: number, student: { firstName: string; lastName: string; groupId: number }): Observable<any> {
    return this.apiService.put<any>(`students/${id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.apiService.delete<any>(`students/${id}`)
  }

  searchStudents(name: string): Observable<any[]> {
    return this.apiService.get(`students/search?name=${name}`);
  }
}
