import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IVehicle } from '../../../core/interfaces/vehicle.interface';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { SnackBarService } from '../../../core/services/snackbar.service';
import { HomeService } from '../home.service';
import { DialogVehicleComponent } from 'src/app/shared/dialog-vehicle/dialog-vehicle.component';
import { IDialogVehicleData } from 'src/app/core/interfaces/dialog-vehicle.interface';

@Component({
  selector: 'app-table-vehicle',
  templateUrl: './table-vehicle.component.html',
  styleUrls: ['./table-vehicle.component.scss']
})
export class TableVehicleComponent implements OnChanges {

  public displayedColumns: string[] = ['id', 'placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'acoes'];
  public dataSource: MatTableDataSource<IVehicle[] | any>;
  public width = {
    'medium': '400px',
    'large': '500px'
  }

  @Input() dataVehicle: IVehicle[];

  constructor(
    public dialog: MatDialog,
    private homeService: HomeService,
    private snack: SnackBarService,
  ) { }

  ngOnChanges(): void {
    this.homeService.getVehicles$.subscribe((vehicle: IVehicle[]) => {
      this.dataSource = new MatTableDataSource(vehicle)
    })
  }

  public deleteVehicle(vehicle: IVehicle) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: this.width['large'],
      data: {
        title: `Deletar Placa: ${vehicle.placa}`,
        message: `Confimar deleção do Véiculo: ${vehicle.placa}`
      }
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.homeService.removeVehicle(vehicle.id);
        this.snack.success(`Placa: ${vehicle.placa} deletada com sucesso`);
      }
    });
  }

  public editVehicle(vehicle?: IVehicle): void {
    const dialog = this.dialog.open(DialogVehicleComponent, {
      width: this.width['large'],
      data: {
        isEdition: true,
        vehicle: vehicle
      }
    });

    dialog.afterClosed().subscribe((data: IDialogVehicleData) => {
      if (data.isEdition) {
        this.homeService.editVehicle(data.vehicle);
        this.snack.success('Dados edidatos com Sucesso!');
      }
    });
  }
}
