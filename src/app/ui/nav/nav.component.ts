import { Component } from '@angular/core';
import { LoginNavComponent } from './login-nav/login-nav.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LoginNavComponent, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
