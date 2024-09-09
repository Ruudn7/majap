import { Component, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@app/auth/auth.service';
import { User } from '@app/interface/user';

@Component({
  selector: 'app-login-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-nav.component.html',
  styleUrl: './login-nav.component.scss'
})
export class LoginNavComponent implements OnInit {

  constructor(
   private authService: AuthService
  ) {}

  user: Signal<User> = this.authService.user;

  ngOnInit(): void {
    console.log(this.user())
  }

  login(): void {
    this.authService.setUser('sampleEmail')
  }

}
