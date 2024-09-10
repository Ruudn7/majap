import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent {

  @Input() formName = 'Form';

}
