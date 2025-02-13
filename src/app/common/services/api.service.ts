import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  get<T>(endpoint: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`http://localhost:8080/api/v1/${endpoint}`,{params});
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`http://localhost:8080/api/v1/${endpoint}`, data);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`http://localhost:8080/api/v1/${endpoint}`, data);
  }

  delete<T>(endpoint: string, params: any = {}): Observable<T> {
    return this.http.delete<T>(`http://localhost:8080/api/v1/${endpoint}`, {params});
  }
}
