import { Component, forwardRef, Input } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-majapp-input',
  standalone: true,
  imports: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MajappInputComponent),
    multi: true
  }],
  templateUrl: './majapp-input.component.html',
  styleUrl: './majapp-input.component.scss'
})
export class MajappInputComponent extends DefaultValueAccessor {

  @Input() label = 'sample label';
}
