import { Injectable, signal } from '@angular/core';
import { LoginUser } from '@app/components/login-form/login.interface';
import { User } from '@app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  user = signal<User>({
    email: ''
  })

  login(loginFormValue: LoginUser) {
    console.log(loginFormValue)
  }

  setUser(email: string): void {
    this.user.set({email})
  }

}