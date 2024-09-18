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

  value: string = '';
  override onChange = (value: any) => {};
  override onTouched = () => {};

  // Implementacja metody writeValue, aby ustawić wartość na input
  override writeValue(value: any): void {
    this.value = value;
  }

  // Metoda do rejestrowania zmiany wartości
  override registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Metoda do rejestrowania, że pole zostało dotknięte
  override registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
