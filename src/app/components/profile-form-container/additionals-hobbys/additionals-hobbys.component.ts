import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ChipsListComponent } from '@app/shared/chips-list/chips-list.component';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-additionals-hobbys',
  standalone: true,
  imports: [MajappInputComponent, ReactiveFormsModule, InputValidatorComponent, ChipsListComponent],
  templateUrl: './additionals-hobbys.component.html',
  styleUrl: './additionals-hobbys.component.scss'
})
export class AdditionalsHobbysComponent {

  @ViewChild('hobbyInput', {read: MajappInputComponent}) hobbyInput!: MajappInputComponent;

  hobbyControl = new FormControl<string>('', { validators: [Validators.required, Validators.minLength(3)]})
  additionalsForm: any;

  @Input() hobbys!: FormArray<FormControl<string>>;

  addHobby(value: string | null): void {
    if (value) {
      if (this.hobbys.value.includes(value)) {
        return;
      }

      if (this.hobbys.length < 10) {
        this.hobbys.push(new FormControl(value, { nonNullable: true }));
        this.hobbyControl.reset();
      }
    }
  }

}


