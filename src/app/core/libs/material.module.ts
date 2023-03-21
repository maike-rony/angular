import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
