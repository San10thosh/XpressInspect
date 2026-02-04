import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFlow } from './team-flow';

describe('TeamFlow', () => {
  let component: TeamFlow;
  let fixture: ComponentFixture<TeamFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
