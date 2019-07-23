import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule, MatIconModule, MatListModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
