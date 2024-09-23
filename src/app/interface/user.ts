import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export interface IUser {
    basicInfo: IUserBasicInfo;
    contact: IUserContactInfo;
    address?: IUserAddressInfo;
    additionals?: IUserAdditionalInfo;
}

export interface IUserForm {
    basicInfo: FormGroup<IUserBasicForm>;
    contact: FormGroup<IUserContactForm>;
    address?: FormGroup<IUserAddressForm>;
    additionals?: FormGroup<IUserAdditionalForm>;
}

export interface IUserBasicInfo {
    name: string;
    birthday: string;
    lastname: string;
    gender: string;
}

export interface IUserBasicForm {
    name: FormControl<string>;
    birthday: FormControl<string>;
    lastname: FormControl<string>;
    gender: FormControl<string>;
}

export interface IUserContactInfo {
    email: string;
    phone?: string;
}

export interface IUserContactForm {
    email: FormControl<string>;
    phone?: FormControl<string>;
}

export interface IUserAddressInfo {
    city?: string;
    country?: string;
    street?: string;
    postalCode?: string;
}

export interface IUserAddressForm {
    city: FormControl<string>;
    country?: FormControl<string>;
    street?: FormControl<string>;
    postalCode?: FormControl<string>;
}

export interface IUserAdditionalInfo {
    description?: string;
    hobbys?: string[];
    shotrInfos?: IUserAdditionalShorts[];
}

export interface IUserAdditionalForm {
    description?: FormControl<string>;
    hobbys?: FormArray<FormControl<string>>;
    shotrInfos?: FormArray<FormControl<IUserAdditionalShorts>>;
}

export interface IUserAdditionalShorts {
    title: string;
    answer: string;
    visible: boolean;
}

export interface IUserAdditionalShortsForm {
    title: FormControl<string>;
    answer: FormControl<string>;
    visible: FormControl<boolean>;
}
