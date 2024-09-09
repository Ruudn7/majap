import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@app/auth/auth.service';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';
import { LoginUser, LoginUserForm } from './login.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MajappInputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService
  ) {}

  loginForm = this.fb.group<LoginUserForm>({
    username: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),  // Użyj FormControl z typem string i walidatorem
    password: new FormControl<string>('', {nonNullable: true})  
  })

  loginFormValue!: LoginUser;

  login() {
    this.loginFormValue = this.loginForm.getRawValue();
    this.authService.login(this.loginFormValue)
  }
  
}
