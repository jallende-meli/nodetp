import { Component, OnInit } from '@angular/core';
import {Agency} from '../clases/agency/agency';
import {ApiService} from '../services/services.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-saved-agencies',
  templateUrl: './saved-agencies.component.html',
  styleUrls: ['./saved-agencies.component.scss']
})
export class SavedAgenciesComponent implements OnInit {
  loading = true;
  agencies: Agency[];
  selectedAgencies: Agency[] = [];

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getSavedAgencies();
  }
  getSavedAgencies() {
    this.apiService.getSavedAgencies()
      .subscribe(res => {
        this.agencies = res;
      }, error => {
        this.openSnackBar('Error al traer las agencias guardadas.',
          'OK');
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deleteAgencies(options) {
    for (const option of options) {
      this.selectedAgencies.push(option.value);
    }
    this.apiService.deleteAgencies(this.selectedAgencies)
      .subscribe(res => {
        this.agencies = res;
        this.openSnackBar('Borradas correctamente', 'ok');
      }, error => {
        this.openSnackBar('Error al borrar las agencias', 'ok');
      });
  }


}
