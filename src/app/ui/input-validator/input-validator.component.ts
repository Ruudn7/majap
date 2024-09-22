import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal, Signal } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-validator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-validator.component.html',
  styleUrl: './input-validator.component.scss'
})
export class InputValidatorComponent implements OnInit {

constructor (
    private formGroup: FormGroupDirective
  ) {}

  ngOnInit(): void {
    if (this.controlName) {
      this.control = signal(this.formGroup.form.get(this.controlName) as FormControl<any>);
    } else if(this.singleControl) {
      this.control = signal(this.singleControl);
    }
  }

  @Input() controlName!: string;
  @Input() singleControl!: FormControl<any>;
  
  control!: Signal<FormControl>;

  get controlInstance() {
    return this.control();
  }
}
