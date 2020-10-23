import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

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
      department: 'hr',
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
      department: 'hr',
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
      department: 'hr',
      isActive: true,
      photoPath: 'assets/images/person3.jpg',
      password: '',
      confirmPassword:''
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

}
