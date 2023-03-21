import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../app/core/libs/material.module'
import { HttpClientModule } from '@angular/common/http';
import { TableVehicleComponent } from './table-vehicle/table-vehicle.component';
import { TableFilterVehicleComponent } from './table-filter-characters/table-filter-vehicle.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { DialogVehicleComponent } from '../../shared/dialog-vehicle/dialog-vehicle.component';

@NgModule({
  declarations: [
    HomeComponent,
    TableVehicleComponent,
    TableFilterVehicleComponent,
    DialogConfirmComponent,
    DialogVehicleComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
