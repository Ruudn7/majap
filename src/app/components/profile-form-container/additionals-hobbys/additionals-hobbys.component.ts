import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { FormArrayService } from '@app/services/form-array.service';
import { ChipsListComponent } from '@app/shared/chips-list/chips-list.component';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-additionals-hobbys',
  standalone: true,
  imports: [MajappInputComponent, ReactiveFormsModule, InputValidatorComponent, ChipsListComponent, CommonModule],
  templateUrl: './additionals-hobbys.component.html',
  styleUrl: './additionals-hobbys.component.scss'
})
export class AdditionalsHobbysComponent {

  @ViewChild('hobbyInput', {read: MajappInputComponent}) hobbyInput!: MajappInputComponent;

  hobbyControl = this.fArrayServ.returnNewControl('', [Validators.required, Validators.minLength(3)]);
  additionalsForm: any;
  editMode = false;

  constructor(
    private fArrayServ: FormArrayService
  ) {}

  @Input() hobbys!: FormArray<FormControl<string>>;

  addHobby(value: string | null): void {
    if (value) {
      if (this.hobbys.value.includes(value)) {
        return;
      }

      if (this.hobbys.length < 10) {
        this.fArrayServ.pushControl(this.hobbys, value, [Validators.required, Validators.minLength(3)]);
        this.hobbyControl.reset();
      }
    }
  }

  finishEdit(): void {
    this.editMode = false;
    this.hobbyControl = this.fArrayServ.returnNewControl('', [Validators.required, Validators.minLength(3)]);
  }

  editCancel(): void {
    this.hobbyControl.reset();
    this.finishEdit();
  }

  getControlFromList(label: string): void {
    this.hobbyControl = this.fArrayServ.findControl(this.hobbys, label);
    this.editMode = true;
  }

}


