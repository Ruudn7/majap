import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormAddressComponent } from './profile-form-address.component';

describe('ProfileFormAddressComponent', () => {
  let component: ProfileFormAddressComponent;
  let fixture: ComponentFixture<ProfileFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
