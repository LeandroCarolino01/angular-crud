import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickersConfig: Partial<BsDatepickerConfig>
  dateOfBirth: Date = new Date(2020, 0, 30)
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
  constructor() {
    this.datePickersConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2021, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value)
  }

}
