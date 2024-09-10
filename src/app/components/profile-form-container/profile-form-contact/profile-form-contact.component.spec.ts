import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormContactComponent } from './profile-form-contact.component';

describe('ProfileFormContactComponent', () => {
  let component: ProfileFormContactComponent;
  let fixture: ComponentFixture<ProfileFormContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileFormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
