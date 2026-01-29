import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalInspectionComponent } from './digital-inspection';

describe('DigitalInspectionComponent', () => {
  let component: DigitalInspectionComponent;
  let fixture: ComponentFixture<DigitalInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalInspectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalInspectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
