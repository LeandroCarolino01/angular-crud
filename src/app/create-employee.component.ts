import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ];
  fullName: string = 'Name';
  email: string = 'Email';
  gender: string = 'female';
  phoneNumber: number;
  isActive:boolean;
  department: string = '3';
  dateOfBirth: string;
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value)
  }

}
