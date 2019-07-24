import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
