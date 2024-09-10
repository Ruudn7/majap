import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUserContactForm } from '@app/interface/user';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-profile-form-contact',
  standalone: true,
  imports: [ MajappInputComponent, InputValidatorComponent, ReactiveFormsModule ],
  templateUrl: './profile-form-contact.component.html',
  styleUrl: './profile-form-contact.component.scss'
})
export class ProfileFormContactComponent {

  @Input() contactForm!: FormGroup<IUserContactForm>;

}
