import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {  delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient){}
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
      confirmPassword:''
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
      confirmPassword:''
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
      confirmPassword:''
    }
  ];

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id)
  }

  save(employee: Employee) {
    if(employee.id === null){
      const maxid = this.listEmployees.reduce(function(e1,e2) {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id =maxid + 1;
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEmployee(id: number){
    const i = this.listEmployees.findIndex(e => e.id === id);
    if (i !== -1){
      this.listEmployees.splice(i, 1);
    }
  }

}
