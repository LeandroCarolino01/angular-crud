import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from './models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickersConfig: Partial<BsDatepickerConfig>
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
    password:null,
    confirmPassword:null
  }
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ];
  fullName: string ;
  email: string;
  gender: string;
  phoneNumber: number;
  isActive:boolean;
  department: string = '3';
  photoPath:string;
  password:string;
  confirmPassword:string;
  constructor() {
    this.datePickersConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee)
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
