import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto = false;
  panelTitle: string;
  datePickersConfig: Partial<BsDatepickerConfig>
  employee: Employee;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  fullName: string;
  email: string;
  gender: string;
  phoneNumber: number;
  isActive: boolean;
  department: string = '3';
  photoPath: string;
  password: string;
  confirmPassword: string;
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    this.datePickersConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
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
        password: null,
        confirmPassword: null
      }
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    }
    else {
      this.panelTitle = 'Edit employee';
      this.employee = Object.assign({}, this._employeeService.getEmployee(id));
    }
  }


  saveEmployee() {
    this._employeeService.save(this.employee).subscribe(
      (data: Employee) => {
        console.log(data);
        this.createEmployeeForm.reset();
        this._router.navigate(['list']);
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }


}
