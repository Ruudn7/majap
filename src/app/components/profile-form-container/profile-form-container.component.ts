import { Component } from '@angular/core';
import { FormContainerComponent } from '@app/ui/form-container/form-container.component';
import { ProfileFormFieldsComponent } from './profile-form-fields/profile-form-fields.component';

@Component({
  selector: 'app-profile-form-container',
  standalone: true,
  imports: [
    FormContainerComponent,
    ProfileFormFieldsComponent
  ],
  templateUrl: './profile-form-container.component.html',
  styleUrl: './profile-form-container.component.scss'
})
export class ProfileFormContainerComponent {

}
