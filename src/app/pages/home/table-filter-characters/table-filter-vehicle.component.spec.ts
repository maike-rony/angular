import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableFilterVehicleComponent } from './table-filter-vehicle.component';

describe('TableFilterCharactersComponent', () => {
  let component: TableFilterVehicleComponent;
  let fixture: ComponentFixture<TableFilterVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilterVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
