import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUserAdditionalForm } from '@app/interface/user';
import { ChipsListComponent } from '@app/shared/chips-list/chips-list.component';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';
import { AdditionalsHobbysComponent } from '../additionals-hobbys/additionals-hobbys.component';

@Component({
  selector: 'app-profile-form-additionals',
  standalone: true,
  imports: [ MajappInputComponent, InputValidatorComponent, ReactiveFormsModule, ChipsListComponent, AdditionalsHobbysComponent ],
  templateUrl: './profile-form-additionals.component.html',
  styleUrl: './profile-form-additionals.component.scss'
})
export class ProfileFormAdditionalsComponent {

  @Input() additionalsForm!: FormGroup<IUserAdditionalForm>;

  get hobbys(): FormArray<FormControl<string>> {
    return this.additionalsForm.get('hobbys') as FormArray<FormControl<string>>;
  }
}
