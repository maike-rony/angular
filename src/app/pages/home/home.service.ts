import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IVehicle } from './../../core/interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // Expor dados API
  private getVehiclesSubject$ = new BehaviorSubject<IVehicle[]>([]);
  public getVehicles$ = this.getVehiclesSubject$.asObservable();

  public carData: IVehicle[] = [
    { id: 1, placa: 'ABC-1234', chassi: '123456789', renavam: '123456789', modelo: 'Fiesta', marca: 'Ford', ano: 2010 },
    { id: 2, placa: 'CDE-9876', chassi: '987654321', renavam: '987654321', modelo: 'Gol', marca: 'Volkswagen', ano: 2008 },
    { id: 3, placa: 'FGH-4321', chassi: '567891234', renavam: '567891234', modelo: 'Civic', marca: 'Honda', ano: 2015 }
  ];

  public getVehicles(): Observable<IVehicle[]> {
    this.getVehiclesSubject$.next(this.carData);
    return of(this.carData);
  }

  public removeVehicle(id: number): Observable<IVehicle[]> {
    this.carData = this.carData.filter((vehicle: IVehicle) => vehicle.id !== id);
    return this.getVehicles();
  }

  public editVehicle(vehicleEdit: IVehicle): Observable<IVehicle[]> {
    const findVehicle = this.carData.findIndex((vehicle: IVehicle) => vehicle.id === vehicleEdit.id);
    this.carData[findVehicle] = {
      ...vehicleEdit
    }
    return this.getVehicles();
  }

  public insertVehicle(vehicle: IVehicle): Observable<IVehicle[]> {
    const maxId = this.carData.length !== 0 ? Math.max(...this.carData.map(obj => obj.id)) : 0
    this.carData.push({
      ...vehicle,
      id: Number(maxId + 1)
    })
    return this.getVehicles();
  }
}
