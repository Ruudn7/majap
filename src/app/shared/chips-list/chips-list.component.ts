import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  signal,
  ViewChildren,
  WritableSignal
} from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import {
  from,
  mergeMap,
  Subscription,
  switchMap
} from 'rxjs';
import { ChipsComponent } from './chips/chips.component';

@Component({
  selector: 'app-chips-list',
  standalone: true,
  imports: [ChipsComponent],
  templateUrl: './chips-list.component.html',
  styleUrl: './chips-list.component.scss',
})
export class ChipsListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren(ChipsComponent) chips: QueryList<ChipsComponent> = new QueryList<ChipsComponent>();

  @Input() maxAmount = 10;
  @Input() arrayList: FormArray<FormControl<string>> = new FormArray<FormControl<string>>([]);

  sampleChips: WritableSignal<string[]> = signal([]);
  closeSubscription!: Subscription;

  ngOnInit(): void {
    this.sampleChips.set(this.arrayList.getRawValue());

    this.arrayList.valueChanges.subscribe((list) => {
      this.sampleChips.set(list);
    });

    this.closeListener();
  }

  ngAfterViewInit(): void {
    this.closeListener();
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
        this.arrayList.removeAt(this.arrayList.value.indexOf(label));
      });
  }

  ngOnDestroy(): void {
    this.closeSubscription && this.closeSubscription.unsubscribe(); 
  }
}
