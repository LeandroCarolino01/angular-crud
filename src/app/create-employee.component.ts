import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  fullName: string = 'Name';
  email: string = 'Email';
  gender: string;
  phoneNumber: number;
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value)
  }

}
