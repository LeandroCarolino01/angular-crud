import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Anna',
      gender: 'female',
      email: 'anna@gmail.com',
      contactPreference: 'Phone',
      phoneNumber: 26262626262,
      dateOfBirth: new Date('11/20/1978'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/person1.jpg',
      password: '',
      confirmPassword: ''
    },
    {
      id: 2,
      name: 'maria',
      gender: 'female',
      email: 'anna@gmail.com',
      contactPreference: 'Phone',
      phoneNumber: 26262626262,
      dateOfBirth: new Date('11/20/1978'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/person2.jpg',
      password: '',
      confirmPassword: ''
    },
    {
      id: 3,
      name: 'mark',
      gender: 'female',
      email: 'anna@gmail.com',
      contactPreference: 'Phone',
      phoneNumber: 26262626262,
      dateOfBirth: new Date('11/20/1978'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/person3.jpg',
      password: '',
      confirmPassword: ''
    }
  ];

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees')
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

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id)
  }

  save(employee: Employee): Observable<Employee> {
    if (employee.id === null) {
     return this.http.post<Employee>('http://localhost:3000/employees', employee, {
        headers: new HttpHeaders({
          'content-Type': 'application/json'
        })

      })
      .pipe(
        catchError(this.handleError)
      )
    } else {
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
  }

}
