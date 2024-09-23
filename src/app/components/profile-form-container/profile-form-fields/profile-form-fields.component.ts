import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { IUser, IUserAdditionalForm, IUserAdditionalShorts, IUserAddressForm, IUserBasicForm, IUserContactForm, IUserForm } from '@app/interface/user';
import { FormSectionComponent } from '@app/ui/form-section/form-section.component';
import { map, tap } from 'rxjs';
import { C_EMPTY_USER, C_SAMPLE_USER } from '../const';
import { ProfileFormAdditionalsComponent } from '../profile-form-additionals/profile-form-additionals.component';
import { ProfileFormAddressComponent } from '../profile-form-address/profile-form-address.component';
import { ProfileFormBasicComponent } from '../profile-form-basic/profile-form-basic.component';
import { ProfileFormContactComponent } from '../profile-form-contact/profile-form-contact.component';
import { FormArrayService } from '@app/services/form-array.service';

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
export class ProfileFormFieldsComponent implements OnInit, OnDestroy {

  constructor(
    private fb: NonNullableFormBuilder,
    private fArrayServ: FormArrayService
  ) {}

  isAddresVisible = new FormControl(false);
  isAdditonalsVisible = new FormControl(true);

  user: IUser = C_SAMPLE_USER;
  // user: IUser = C_EMPTY_USER;

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
  ).subscribe();

  ngOnInit(): void {
    this.changeAdditionalsValidation(!!this.isAdditonalsVisible.value);
    this.changeAddressValidation(!!this.isAddresVisible.value);


    if (this.user.basicInfo.name) {
      this.userForm.patchValue(this.user);


  const hobbysArray = this.userForm.get('additionals.hobbys') as FormArray;
  this.fillFormArray(this.user?.additionals?.hobbys ? this.user.additionals.hobbys : [], 'additionals.hobbys');
  this.fillFormArray(this.user?.additionals?.shortInfos ? this.user.additionals.shortInfos : [], 'additionals.shortInfos');
    }
  }

  save(): void {
    this.user = this.userForm.getRawValue();
  }

  private fillFormArray(values: any[], formArrayName: string) {
    const formArray = this.userForm.get(formArrayName) as FormArray;
    const controls = values.map(value => this.fArrayServ.returnNewControl(value, [Validators.required, Validators.minLength(3)]));
    formArray.clear(); 
    controls.forEach(control => this.fArrayServ.pushControl(formArray, control.value));
  }

  private changeAddressValidation(isVisible: boolean): void {
    isVisible ? this.userForm.get('address')?.enable() : this.userForm.get('address')?.disable()
  }

  private changeAdditionalsValidation(isVisible: boolean): void {
    isVisible ? this.userForm.get('additionals')?.enable() : this.userForm.get('additionals')?.disable()
  }

  private createBasicForm(): FormGroup<IUserBasicForm> {
    return this.fb.group<IUserBasicForm>({
      name: this.fArrayServ.returnNewControl('' , [Validators.required, Validators.minLength(3)]),
      birthday: this.fArrayServ.returnNewControl('' , [Validators.required]),
      lastname: this.fArrayServ.returnNewControl('' , [Validators.required, Validators.minLength(3)]),
      gender: this.fArrayServ.returnNewControl('male' , [Validators.required, Validators.minLength(3)])
    })
  }

  private createContactForm(): FormGroup<IUserContactForm> {
    return this.fb.group<IUserContactForm>({
      email: this.fArrayServ.returnNewControl('' , [Validators.required, Validators.email]),
      phone: this.fArrayServ.returnNewControl('')
    })
  }

  private createAddressForm(): FormGroup<IUserAddressForm> {
    return this.fb.group<IUserAddressForm>({
      city: this.fArrayServ.returnNewControl('' , [Validators.required, Validators.minLength(3)]),
      country: this.fArrayServ.returnNewControl(''),
      street: this.fArrayServ.returnNewControl(''),
      postalCode: this.fArrayServ.returnNewControl('')
    })
  }

  private createAdditionalsForm(): FormGroup<IUserAdditionalForm> {
    return this.fb.group<IUserAdditionalForm>({
      description: this.fArrayServ.returnNewControl('' , [Validators.required, Validators.minLength(15)]),
      hobbys: new FormArray<FormControl<string>>([], {
        validators: [],
      }),
      shortInfos: new FormArray<FormControl<IUserAdditionalShorts>>([], {
        validators: [],
      })
    })
  }

  ngOnDestroy(): void {
    this.addressValidationSub.unsubscribe();
    this.additionalValidationSub.unsubscribe();
  }
}
