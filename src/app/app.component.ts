import { Component } from '@angular/core';
import { ControlSpinnerService } from './core/services/control-spinner.service';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(
    public spinnerHandler: SpinnerService,
    private controlSpinnerService: ControlSpinnerService
  ) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  private showSpinner = (state: boolean): void => {
    if (state) {
      this.controlSpinnerService.spinnerShow()
    }
    else {
      this.controlSpinnerService.spinnerHide()
    }
  };


}
