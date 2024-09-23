import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDisplayComponent } from './short-display.component';

describe('ShortDisplayComponent', () => {
  let component: ShortDisplayComponent;
  let fixture: ComponentFixture<ShortDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
