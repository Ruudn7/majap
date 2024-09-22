import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalsHobbysComponent } from './additionals-hobbys.component';

describe('AdditionalsHobbysComponent', () => {
  let component: AdditionalsHobbysComponent;
  let fixture: ComponentFixture<AdditionalsHobbysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalsHobbysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalsHobbysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
