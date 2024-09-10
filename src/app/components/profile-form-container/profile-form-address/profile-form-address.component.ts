import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUserAddressForm } from '@app/interface/user';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-profile-form-address',
  standalone: true,
  imports: [ MajappInputComponent, InputValidatorComponent, ReactiveFormsModule ],
  templateUrl: './profile-form-address.component.html',
  styleUrl: './profile-form-address.component.scss'
})
export class ProfileFormAddressComponent {

  @Input() addressForm!: FormGroup<IUserAddressForm>;

}
