import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidatorComponent } from './password-validator.component';

describe('PasswordValidatorComponent', () => {
  let component: PasswordValidatorComponent;
  let fixture: ComponentFixture<PasswordValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordValidatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
