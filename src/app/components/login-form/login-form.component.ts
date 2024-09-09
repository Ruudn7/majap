import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '@app/auth/auth.service';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';
import { PasswordValidatorComponent } from '@app/ui/password-validator/password-validator.component';
import { LoginUser, LoginUserForm } from './login.interface';

export interface IErrorOptionsConfig {
  uppercase?: boolean;
  lowercase?: boolean;
  number?: boolean;
  special?: boolean;
}

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MajappInputComponent, ReactiveFormsModule, CommonModule, InputValidatorComponent, PasswordValidatorComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService
  ) {}

  loginForm = this.fb.group<LoginUserForm>({
    username: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}),
    password: new FormControl<string>('', {nonNullable: true, validators: [this.passwordValidator({
      uppercase: true,
      lowercase: true,
      number: true,
      special: true
    })]})  
  })

  loginFormValue!: LoginUser;

  login() {
    this.loginFormValue = this.loginForm.getRawValue();
    this.authService.login(this.loginFormValue)
  }

  passwordValidator<ValidatorFn>(options: IErrorOptionsConfig) {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasLowercase = control.value.match(/[a-z]/);
      const hasUpperrcase = control.value.match(/[A-Z]/);
      const hasNumber = control.value.match(/[\d]/);
      const hasSpecial = control.value.match(/[\W]/);

      const errors: IErrorOptionsConfig = {};
      let isValid = true;

      if (options?.lowercase && !hasLowercase) {
        errors.lowercase = true;
        isValid = false;
      }
      if (options?.uppercase && !hasUpperrcase) {
        errors.uppercase = true;
        isValid = false;
      }
      if (options?.number && !hasNumber) {
        errors.number = true;
        isValid = false;
      }
      if (options?.special && !hasSpecial) {
        errors.special = true;
        isValid = false;
      }

      return isValid ? null : errors;
    }
  }
  
}
