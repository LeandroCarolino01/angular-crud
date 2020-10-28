import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {  delay } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Anna',
      gender: 'female',
      contactPreference: 'Email',
      phoneNumber: 26262626262,
      dateOfBirth: new Date('11/20/1978'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/person1.jpg',
      password: '',
      confirmPassword:''
    },
    {
      id: 2,
      name: 'maria',
      gender: 'female',
      contactPreference: 'Email',
      phoneNumber: 26262626262,
      dateOfBirth: new Date('11/20/1978'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/person2.jpg',
      password: '',
      confirmPassword:''
    },
    {
      id: 3,
      name: 'mark',
      gender: 'female',
      contactPreference: 'Email',
      phoneNumber: 26262626262,
      dateOfBirth: new Date('11/20/1978'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/person3.jpg',
      password: '',
      confirmPassword:''
    }
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.listEmployees).pipe(
      delay( 3000 )
  );
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id)
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }

}
