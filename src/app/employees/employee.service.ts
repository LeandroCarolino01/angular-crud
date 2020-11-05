import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client side error', errorResponse.error.message);
    } else {
      console.log('Server side error: ', errorResponse)
    }
    return throwError('this is a problem with the service!')
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError))

  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    })
    .pipe(
      catchError(this.handleError)
    );

  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    })
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError))
  }

}
