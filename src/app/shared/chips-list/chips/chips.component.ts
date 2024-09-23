import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {

  @Input() label = '';
  @Output() closeChips = new EventEmitter<string>();
  @Output() editChips = new EventEmitter<string>();

  close(): void {
    this.closeChips.emit(this.label);
  }

  edit(): void {
    this.editChips.emit(this.label)
  }

}
