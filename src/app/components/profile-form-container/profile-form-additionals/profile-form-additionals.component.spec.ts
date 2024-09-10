import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormAdditionalsComponent } from './profile-form-additionals.component';

describe('ProfileFormAdditionalsComponent', () => {
  let component: ProfileFormAdditionalsComponent;
  let fixture: ComponentFixture<ProfileFormAdditionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormAdditionalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileFormAdditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
