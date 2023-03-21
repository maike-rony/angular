

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDialogVehicleData } from '../../core/interfaces/dialog-vehicle.interface';
import { SnackBarService } from '../../core/services/snackbar.service';
import { HomeService } from '../../pages/home/home.service';
import { IVehicle } from 'src/app/core/interfaces/vehicle.interface';


@Component({
  selector: 'app-dialog-vehicle',
  templateUrl: './dialog-vehicle.component.html',
  styleUrls: ['./dialog-vehicle.component.scss']
})
export class DialogVehicleComponent {

  public vehicleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogVehicleData,
    private snackBar: SnackBarService,
    private hometService: HomeService
  ) {
    if (this.data.isEdition) {
      this.vehicleForm = this.formBuilder.group({
        id: [this.data.vehicle?.id],
        placa: [this.data.vehicle?.placa, { validators: [Validators.required] }],
        marca: [this.data.vehicle?.marca, { validators: [Validators.required] }],
        chassi: [this.data.vehicle?.chassi, { validators: [Validators.required] }],
        renavam: [this.data.vehicle?.renavam, { validators: [Validators.required] }],
        modelo: [this.data.vehicle?.modelo, { validators: [Validators.required] }],
        ano: [this.data.vehicle?.ano, { validators: [Validators.required] }],
      });
    }
    else {
      this.vehicleForm = this.formBuilder.group({
        id: [null],
        placa: [null, { validators: [Validators.required] }],
        chassi: [null, { validators: [Validators.required] }],
        renavam: [null, { validators: [Validators.required] }],
        marca: [null, { validators: [Validators.required] }],
        modelo: [null, { validators: [Validators.required] }],
        ano: [null, { validators: [Validators.required] }]
      });
    }
  }

  public saveOrEditUser() {
    if (this.data.isEdition) {
      this.dialogRef.close({
        isEdition: true,
        vehicle: this.vehicleForm.value
      });
    }
    else {
      this.dialogRef.close({
        isEdition: false,
        vehicle: this.vehicleForm.value
      });
    }
  }

}
