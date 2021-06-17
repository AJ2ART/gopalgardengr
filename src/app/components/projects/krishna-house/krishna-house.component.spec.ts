import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnaHouseComponent } from './krishna-house.component';

describe('KrishnaHouseComponent', () => {
  let component: KrishnaHouseComponent;
  let fixture: ComponentFixture<KrishnaHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrishnaHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrishnaHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
