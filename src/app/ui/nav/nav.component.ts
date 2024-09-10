import { Component } from '@angular/core';
import { LoginNavComponent } from './login-nav/login-nav.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LoginNavComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
