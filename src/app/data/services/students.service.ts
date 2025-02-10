import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private endpoint = '/students';
  http = Inject(HttpClient)
  constructor(private api: ApiService) {}

  getStudentsByGroup(groupId: number): Observable<any> {
    return this.api.get<any>(`${this.endpoint}/group/${groupId}`);
  }

  getStudentById(id: number): Observable<any> {
    return this.api.get<any>(`${this.endpoint}/${id}`);
  }

  getAllStudents(): Observable<any> {
    return this.api.get(`${this.endpoint}`);
  }

  addStudent(student: {firstName: string, lastName: string, groupId: number}): Observable<any> {
    return this.api.post<any>(`${this.endpoint}`, student);
  }

  updateStudent(id: number, student: { firstName: string; lastName: string; groupId: number }): Observable<any> {
    return this.api.put<any>(`${this.endpoint}/${id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.api.delete<any>(`${this.endpoint}/${id}`)
  }
}
