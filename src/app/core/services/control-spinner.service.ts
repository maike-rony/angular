import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class ControlSpinnerService {

  constructor(
    private spinner: NgxSpinnerService
  ) { }


  spinnerShow(): void {
    this.spinner.show()
  }

  spinnerHide(): void {
    this.spinner.hide()
  }

}
