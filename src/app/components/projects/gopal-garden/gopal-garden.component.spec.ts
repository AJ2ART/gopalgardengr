import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GopalGardenComponent } from './gopal-garden.component';

describe('GopalGardenComponent', () => {
  let component: GopalGardenComponent;
  let fixture: ComponentFixture<GopalGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GopalGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GopalGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
