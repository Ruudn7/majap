import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormControlOptions, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormArrayService {

  constructor() { }

  pushControl<T>(control: FormArray, value: T,  validators: ValidatorFn[] = [], nonNullable: boolean = true): void {
    control.push(new FormControl(value, { nonNullable, validators }));
  }

  findControl<T>(control: FormArray<FormControl<T>>, value: T): FormControl<T> {
    return control.controls.find(el => el.value === value) as FormControl<T>;
  }

  returnNewControl<T>( value: T, validators: ValidatorFn[] = [],  options: FormControlOptions = {}, nonNullable = true): FormControl<T> {
    const finalOptions = { ...options, validators, nonNullable };
    return new FormControl<T>(value, finalOptions) as FormControl<T>;
  }

  removeControl(control: FormArray, value: string): void {
    const index = control.value.indexOf(value);

    if (index > -1 ) {
      control.removeAt(index)
    };
  }

}
