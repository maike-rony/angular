import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { IVehicle } from './../../core/interfaces/vehicle.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogVehicleComponent } from '../../shared/dialog-vehicle/dialog-vehicle.component';
import { IDialogVehicleData } from '../../core/interfaces/dialog-vehicle.interface';
import { SnackBarService } from './../../core/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public dataVehicle: IVehicle[];
  public width = {
    'medium': '400px',
    'large': '500px'
  }

  constructor(
    private homeService: HomeService,
    public dialog: MatDialog,
    public snack: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.homeService.getVehicles();
    this.homeService.getVehicles$.subscribe((vehicle: IVehicle[]) => {
      this.dataVehicle = vehicle
    })
  }


  public callbackFilterElement(element: string): void {
    if (element.length === 0) {
      this.dataVehicle = this.homeService.carData;
      return;
    }

    this.dataVehicle = this.dataVehicle.filter(vehicle => vehicle.placa === element.trim().toUpperCase())
  }

  public newVehicle() {
    const dialogRef = this.dialog.open(DialogVehicleComponent, {
      width: this.width['large'],
      data: {
        isEdition: false,
      }
    });

    dialogRef.afterClosed().subscribe((data: IDialogVehicleData) => {
      if (!data.isEdition) {
        this.homeService.insertVehicle(data.vehicle);
        this.snack.success('Dados inseridos com Sucesso!');
      }
    });
  }

}
