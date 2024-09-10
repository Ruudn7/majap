import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormBasicComponent } from './profile-form-basic.component';

describe('ProfileFormBasicComponent', () => {
  let component: ProfileFormBasicComponent;
  let fixture: ComponentFixture<ProfileFormBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileFormBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
