import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-table-filter-vehicle',
  templateUrl: './table-filter-vehicle.component.html',
  styleUrls: ['./table-filter-vehicle.component.scss']
})
export class TableFilterVehicleComponent implements OnInit {

  public formSearch: FormGroup;
  @Output() callbackFilterElement = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formSearch = this.formBuilder.group({
      search: []
    })
  }

  ngOnInit(): void {
    this.getSearchFilter();
  }

  private getSearchFilter() {
    this.formSearch.get('search')?.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((element: string) => {
        if (element.length === 0 || element.length > 2) {
          this.callbackFilterElement.emit(element);
        }
      });
  }

}
