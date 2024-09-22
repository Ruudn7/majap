import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class MajappInputComponent implements ControlValueAccessor {

  @Input() label = 'sample label';
  
  public value: string = '';
  
  // Funkcje do propagacji zmian
  private onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {

  }

  // Implementacja writeValue
  writeValue(value: any): void {
    this.value = value || '';
    this.cd.detectChanges();
  }

  // Rejestracja funkcji onChange
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Rejestracja funkcji onTouched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Opcjonalne, dla niektórych przypadków
  setDisabledState(isDisabled: boolean): void {
    const input = this.elementRef.nativeElement.querySelector('input');
    if (isDisabled) {
      this.renderer.setAttribute(input, 'disabled', 'true');
    } else {
      this.renderer.removeAttribute(input, 'disabled');
    }
  }

  // Metoda wywoływana przy zmianie wartości inputa
  onInputChange(value: string): void {
    this.value = value;
    this.onChange(value);
  }
}
