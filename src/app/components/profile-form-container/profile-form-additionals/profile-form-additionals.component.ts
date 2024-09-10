import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUserAdditionalForm } from '@app/interface/user';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-profile-form-additionals',
  standalone: true,
  imports: [ MajappInputComponent, InputValidatorComponent, ReactiveFormsModule ],
  templateUrl: './profile-form-additionals.component.html',
  styleUrl: './profile-form-additionals.component.scss'
})
export class ProfileFormAdditionalsComponent {

  @Input() additionalsForm!: FormGroup<IUserAdditionalForm>;

}
