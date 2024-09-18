import { CommonModule } from '@angular/common';
import {
  Component,
  Input
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { IUserAddressForm } from '@app/interface/user';
import { GoogleMapComponent } from '@app/shared/google-map/google-map.component';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-profile-form-address',
  standalone: true,
  imports: [
    MajappInputComponent,
    InputValidatorComponent,
    ReactiveFormsModule,
    GoogleMapComponent,
    CommonModule,
  ],
  templateUrl: './profile-form-address.component.html',
  styleUrl: './profile-form-address.component.scss',
})
export class ProfileFormAddressComponent  {

  @Input() addressForm!: FormGroup<IUserAddressForm>;

  mapVisible = false;

  changeMapVisibility() {
    this.mapVisible = !this.mapVisible;
  }

}
