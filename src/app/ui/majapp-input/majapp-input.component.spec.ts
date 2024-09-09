import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajappInputComponent } from './majapp-input.component';

describe('MajappInputComponent', () => {
  let component: MajappInputComponent;
  let fixture: ComponentFixture<MajappInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajappInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MajappInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
