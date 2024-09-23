import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserAdditionalShorts } from '@app/interface/user';

@Component({
  selector: 'app-short-display',
  standalone: true,
  imports: [],
  templateUrl: './short-display.component.html',
  styleUrl: './short-display.component.scss'
})
export class ShortDisplayComponent {

  @Input() short!: IUserAdditionalShorts;
  @Input() index!: number;

  @Output() editPostEmitter = new EventEmitter<void>();
  @Output() deletePostEmitter = new EventEmitter<void>();

  changeVisibility(): void {
    this.short.visible = !this.short.visible;
  }

  deleteShort(): void {
    this.deletePostEmitter.emit();
  }

  editPost(): void {
    this.editPostEmitter.emit()
  }

}
