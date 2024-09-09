import { FormControl } from '@angular/forms';

export interface LoginUser {
    username: string;
    password: string;
}

export interface LoginUserForm {
    username: FormControl<string>;
    password: FormControl<string>;
}