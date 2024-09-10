import { Component } from '@angular/core';
import { FormContainerComponent } from '@app/ui/form-container/form-container.component';
import { LoginFormFieldsComponent } from "./login-form-fields/login-form-fields.component";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormContainerComponent, LoginFormFieldsComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

}
