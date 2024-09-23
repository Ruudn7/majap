import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { IUser, IUserAdditionalForm, IUserAdditionalShorts, IUserAddressForm, IUserBasicForm, IUserContactForm, IUserForm } from '@app/interface/user';
import { FormSectionComponent } from '@app/ui/form-section/form-section.component';
import { map, tap } from 'rxjs';
import { C_EMPTY_USER } from '../const';
import { ProfileFormAdditionalsComponent } from '../profile-form-additionals/profile-form-additionals.component';
import { ProfileFormAddressComponent } from '../profile-form-address/profile-form-address.component';
import { ProfileFormBasicComponent } from '../profile-form-basic/profile-form-basic.component';
import { ProfileFormContactComponent } from '../profile-form-contact/profile-form-contact.component';

@Component({
  selector: 'app-profile-form-fields',
  standalone: true,
  imports: [
    ProfileFormBasicComponent,
    ProfileFormContactComponent,
    ProfileFormAddressComponent,
    ProfileFormAdditionalsComponent,
    ReactiveFormsModule,
    CommonModule,
    FormSectionComponent
  ],
  templateUrl: './profile-form-fields.component.html',
  styleUrl: './profile-form-fields.component.scss'
})
export class ProfileFormFieldsComponent implements OnDestroy {

  constructor(
    private fb: NonNullableFormBuilder
  ) {}

  isAddresVisible = new FormControl(false);
  isAdditonalsVisible = new FormControl(true);

  user: IUser = C_EMPTY_USER;

  userForm = this.fb.group<IUserForm>({
    basicInfo: this.createBasicForm(),
    contact: this.createContactForm(),
    address: this.createAddressForm(),
    additionals: this.createAdditionalsForm()
  });
  
  get userInfo(): FormGroup<IUserBasicForm> {
    return this.userForm.get('basicInfo') as FormGroup<IUserBasicForm>
  }

  get userContact(): FormGroup<IUserContactForm> {
    return this.userForm.get('contact') as FormGroup<IUserContactForm>
  }

  get userAddress(): FormGroup<IUserAddressForm> {
    return this.userForm.get('address') as FormGroup<IUserAddressForm>
  }

  get userAdditional(): FormGroup<IUserAdditionalForm> {
    return this.userForm.get('additionals') as FormGroup<IUserAdditionalForm>
  }

  addressValidationSub = this.isAddresVisible.valueChanges.pipe(
    map((v: boolean | null) => !!v),
    tap((v: boolean) => this.changeAddressValidation(v))
  ).subscribe();

  additionalValidationSub = this.isAdditonalsVisible.valueChanges.pipe(
    map((v: boolean | null) => !!v),
    tap((v: boolean) => this.changeAdditionalsValidation(v))
  ).subscribe()

  save(): void {
    this.user = this.userForm.getRawValue();
    console.log(this.user)
  }

  private changeAddressValidation(isVisible: boolean): void {
    isVisible ? this.userForm.get('address')?.enable() : this.userForm.get('address')?.disable()
  }

  private changeAdditionalsValidation(isVisible: boolean): void {
    isVisible ? this.userForm.get('additionals')?.enable() : this.userForm.get('additionals')?.disable()
  }

  private createBasicForm(): FormGroup<IUserBasicForm> {
    return this.fb.group<IUserBasicForm>({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      birthday: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastname: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      gender: new FormControl<string>('male', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
    })
  }

  private createContactForm(): FormGroup<IUserContactForm> {
    return this.fb.group<IUserContactForm>({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.email, Validators.required],
      }),
      phone: new FormControl<string>('', {
        nonNullable: true,
        validators: [],
      }),
    })
  }

  private createAddressForm(): FormGroup<IUserAddressForm> {
    return this.fb.group<IUserAddressForm>({
      city: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      country: new FormControl<string>('', {
        nonNullable: true,
        validators: [],
      }),
      street: new FormControl<string>('', {
        nonNullable: true,
        validators: [],
      }),
      postalCode: new FormControl<string>('', {
        nonNullable: true,
        validators: [],
      })
    })
  }

  private createAdditionalsForm(): FormGroup<IUserAdditionalForm> {
    return this.fb.group<IUserAdditionalForm>({
      description: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(15)],
      }),
      hobbys: new FormArray<FormControl<string>>([], {
        validators: [],
      }),
      shotrInfos: new FormArray<FormControl<IUserAdditionalShorts>>([], {
        validators: [],
      })
    })
  }

  ngOnDestroy(): void {
    this.addressValidationSub.unsubscribe();
    this.additionalValidationSub.unsubscribe();
  }
}
