import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleComponent } from './DialogVehicleComponent';

describe('DialogVehicleComponent', () => {
  let component: DialogVehicleComponent;
  let fixture: ComponentFixture<DialogVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
