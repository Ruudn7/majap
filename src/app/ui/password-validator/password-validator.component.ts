import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { IErrorOptionsConfig } from '@app/components/login-form/login-form.component';

@Component({
  selector: 'app-password-validator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-validator.component.html',
  styleUrl: './password-validator.component.scss'
})
export class PasswordValidatorComponent implements OnInit {

  @Input() controlName!: string;
  error: IErrorOptionsConfig = {};
  isError = false;

  constructor(
    private formDirective: FormGroupDirective
  ) {}

  ngOnInit(): void {
    if (this.controlName) {
      const control = this.formDirective.form.get(this.controlName);

      if (control) {
        this.updateErrors(control);

        control.valueChanges.subscribe(() => this.updateErrors(control));
      }
    }
  }

  private updateErrors(control: AbstractControl): void {
    this.error = control.errors || {};
    this.isError = !!Object.keys(this.error).length;
  }
}
