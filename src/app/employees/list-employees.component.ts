import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Anna',
      gender: 'female',
      contactPreference: 'Email',
      phoneNumber: 26262626262,
      dateOfBirth: new Date('11/20/1978'),
      department: 'hr',
      isActive: true,
      photoPath: 'assets/images/person1.jpg'
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
      photoPath: 'assets/images/person2.jpg'
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
      photoPath: 'assets/images/person3.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
