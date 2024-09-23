import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUserAdditionalForm, IUserAdditionalShorts } from '@app/interface/user';
import { ChipsListComponent } from '@app/shared/chips-list/chips-list.component';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';
import { AdditionalsHobbysComponent } from '../additionals-hobbys/additionals-hobbys.component';
import { AdditionalsShortsComponent } from '../additionals-shorts/additionals-shorts.component';

@Component({
  selector: 'app-profile-form-additionals',
  standalone: true,
  imports: [ MajappInputComponent, InputValidatorComponent, ReactiveFormsModule, ChipsListComponent, AdditionalsHobbysComponent, AdditionalsShortsComponent ],
  templateUrl: './profile-form-additionals.component.html',
  styleUrl: './profile-form-additionals.component.scss'
})
export class ProfileFormAdditionalsComponent {

  @Input() additionalsForm!: FormGroup<IUserAdditionalForm>;

  get hobbys(): FormArray<FormControl<string>> {
    return this.additionalsForm.get('hobbys') as FormArray<FormControl<string>>;
  }

  get shorts(): FormArray<FormControl<IUserAdditionalShorts>> {
    return this.additionalsForm.get('shortInfos') as FormArray<FormControl<IUserAdditionalShorts>>;
  }
}
