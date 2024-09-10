import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUserBasicForm } from '@app/interface/user';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-profile-form-basic',
  standalone: true,
  imports: [ MajappInputComponent, InputValidatorComponent, ReactiveFormsModule],
  templateUrl: './profile-form-basic.component.html',
  styleUrl: './profile-form-basic.component.scss'
})
export class ProfileFormBasicComponent {

  @Input() basicInfoForm!: FormGroup<IUserBasicForm>;

}
