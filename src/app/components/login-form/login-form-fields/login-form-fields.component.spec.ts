import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormFieldsComponent } from './login-form-fields.component';

describe('LoginFormFieldsComponent', () => {
  let component: LoginFormFieldsComponent;
  let fixture: ComponentFixture<LoginFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormFieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
