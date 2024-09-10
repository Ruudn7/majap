import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormFieldsComponent } from './profile-form-fields.component';

describe('ProfileFormFieldsComponent', () => {
  let component: ProfileFormFieldsComponent;
  let fixture: ComponentFixture<ProfileFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormFieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
