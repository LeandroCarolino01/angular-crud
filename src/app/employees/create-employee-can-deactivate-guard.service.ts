import { CreateEmployeeComponent } from './create-employee.component';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if(component.createEmployeeForm.dirty) {
      return confirm('are you sure?')
    }

    return true;
  }
}
