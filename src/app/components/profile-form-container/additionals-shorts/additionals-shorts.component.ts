import { CommonModule } from '@angular/common';
import { Component, effect, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserAdditionalShorts, IUserAdditionalShortsForm } from '@app/interface/user';
import { FormArrayService } from '@app/services/form-array.service';
import { InputValidatorComponent } from '@app/ui/input-validator/input-validator.component';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';
import { ShortDisplayComponent } from './short-display/short-display.component';

@Component({
  selector: 'app-additionals-shorts',
  standalone: true,
  imports: [
    MajappInputComponent,
    InputValidatorComponent,
    ReactiveFormsModule,
    CommonModule,
    ShortDisplayComponent
  ],
  templateUrl: './additionals-shorts.component.html',
  styleUrl: './additionals-shorts.component.scss'
})
export class AdditionalsShortsComponent implements OnInit {

  constructor(
    private fArrayServ: FormArrayService
  ) {}

  editMode = false;
  editedControl!: FormControl<IUserAdditionalShorts>;
  shortInfoControl: FormGroup<IUserAdditionalShortsForm> = new FormGroup(this.returnShortForm());
  showAddShort = true;
  shotrsSingal: WritableSignal<IUserAdditionalShorts[]> = signal([]);

  @Input() shorts!: FormArray<FormControl<IUserAdditionalShorts>>;

  ngOnInit(): void {
    this.showAddShort = !(this.shorts && this.shorts.length > 1);
  }

  saveShort(): void {
    const newShort = this.shortInfoControl.value as IUserAdditionalShorts;
    if (newShort) {
      this.shotrsSingal.set([...this.shotrsSingal(), newShort]);
      this.fArrayServ.pushControl(this.shorts, newShort);
      this.shortInfoControl.reset();
    }
  }

  editPost(index: number): void {
    this.editMode = true;
    this.editedControl = this.shorts.at(index);
    this.shortInfoControl.patchValue(this.shorts.at(index).value);
  }

  editSave(): void {
    this.editedControl.patchValue(this.shortInfoControl.getRawValue());
    this.shotrsSingal.set(this.shorts.value);
    this.editEnd();
  }

  editEnd(): void {
    this.editMode = false;
    this.shortInfoControl.reset();
  }

  deletePost(i: number) {
    this.shorts.removeAt(i);
    this.shotrsSingal.set(this.shorts.getRawValue());
  }

  saveEditedPost(index: number): void {
    this.shortInfoControl.patchValue(this.shorts.at(index).value)
  }

  private returnShortForm(): IUserAdditionalShortsForm {
    return {
      title: this.fArrayServ.returnNewControl('' , [Validators.required, Validators.minLength(3)]),
      answer: this.fArrayServ.returnNewControl('' , [Validators.required, Validators.minLength(3)]),
      visible: this.fArrayServ.returnNewControl(true, []),
    }
  }

}
