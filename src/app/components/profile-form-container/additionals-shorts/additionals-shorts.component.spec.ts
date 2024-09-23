import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalsShortsComponent } from './additionals-shorts.component';

describe('AdditionalsShortsComponent', () => {
  let component: AdditionalsShortsComponent;
  let fixture: ComponentFixture<AdditionalsShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalsShortsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalsShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
