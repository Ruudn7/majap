import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  signal,
  ViewChildren,
  WritableSignal,
} from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { from, mergeMap, Subscription, switchMap } from 'rxjs';
import { ChipsComponent } from './chips/chips.component';
import { FormArrayService } from '@app/services/form-array.service';

@Component({
  selector: 'app-chips-list',
  standalone: true,
  imports: [ChipsComponent],
  templateUrl: './chips-list.component.html',
  styleUrl: './chips-list.component.scss',
})
export class ChipsListComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private fArrayServ: FormArrayService
  ) {}

  @ViewChildren(ChipsComponent) chips: QueryList<ChipsComponent> =
    new QueryList<ChipsComponent>();

  @Input() maxAmount = 10;
  @Input() arrayList: FormArray<FormControl<string>> = new FormArray<
    FormControl<string>
  >([]);
  @Output() pickedControl = new EventEmitter<string>();

  sampleChips: WritableSignal<string[]> = signal([]);
  closeSubscription!: Subscription;
  editSubscription!: Subscription;

  public savedControl: FormControl<string> = new FormControl();

  ngOnInit(): void {
    this.sampleChips.set(this.arrayList.getRawValue());

    this.arrayList.valueChanges.subscribe((list) => {
      this.sampleChips.set(list);
    });
  }

  ngAfterViewInit(): void {
    this.closeListener();
    this.getControlToEdit();
  }

  closeListener(): void {
    this.closeSubscription = this.chips.changes
      .pipe(
        switchMap((chips: QueryList<ChipsComponent>) => {
          return from(chips.toArray()).pipe(
            mergeMap((el: ChipsComponent) => el.closeChips)
          );
        })
      )
      .subscribe((label: string) => {
        this.fArrayServ.removeControl(this.arrayList, label);
      });
  }

  getControlToEdit(): void {
    this.editSubscription = this.chips.changes
      .pipe(
        switchMap((chips: QueryList<ChipsComponent>) => {
          return from(chips.toArray()).pipe(
            mergeMap((el: ChipsComponent) => el.editChips)
          );
        })
      )
      .subscribe((label: string) => {
        this.pickedControl.emit(label);
      });
  }

  ngOnDestroy(): void {
    this.closeSubscription && this.closeSubscription.unsubscribe();
    this.editSubscription && this.editSubscription.unsubscribe();
  }
}
