import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/services.service';
import {Agency} from '../clases/agency/agency';

@Component({
  selector: 'app-agenciesform',
  templateUrl: './agenciesform.component.html',
  styleUrls: ['./agenciesform.component.scss']
})
export class AgenciesformComponent implements OnInit {
  result = false;
  loading = true;
  site = 'MLA';
  method = 'pagofacil';
  agenciesForm: FormGroup;
  agencies: Agency[];
  selectedAgencies: Agency[] = [];
  savedAgencies: Agency[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSavedAgencies();
    const site = localStorage.getItem('site');
    const method = localStorage.getItem('method');
    localStorage.removeItem('site');
    localStorage.removeItem('method');

    if (site) {
      this.site = site;
    }
    if (method) {
      this.method = method;
    }
    this.agenciesForm = new FormGroup({
      latitudControl: new FormControl('', [Validators.required]),
      longitudControl: new FormControl('', [Validators.required]),
      radiusControl: new FormControl('', [Validators.required])
    });
  }

  searchAgencies() {
    if (this.agenciesForm.valid) {
      const latitud = this.agenciesForm.controls.latitudControl.value;
      const longitud = this.agenciesForm.controls.longitudControl.value;
      const radius = this.agenciesForm.controls.radiusControl.value;
      this.result = true;
      this.apiService.getAgencies(this.site, this.method, latitud, longitud, radius)
        .subscribe(res => {
          for (const agency of res) {
            if (this.savedAgencies.findIndex(x => x.id === agency.id) > -1) {
              agency.saved = true;
              this.selectedAgencies.push(agency);
            }
          }
          this.agencies = res;
          this.loading = false;
        }, error => console.log(error));
    } else {
      return;
    }
  }

  selectAgency(agency: Agency) {
/*    if (agency.saved) {
      const selectedIndex = this.selectedAgencies.findIndex(x => x.id === agency.id);
      if (selectedIndex !== -1) {
        this.selectedAgencies.splice(selectedIndex, 1);
      }
      const agenciesIndex = this.agencies.findIndex(x => x.id === agency.id);
      this.agencies[agenciesIndex].saved = false;
    }*/
  }
  saveAgencies(event) {
    for (const option of event) {
      if (!option.value.saved) {
        this.selectedAgencies.push(option.value);
      }
    }
    this.apiService.saveAgencies(this.selectedAgencies);
  }
  getSavedAgencies() {
    this.apiService.getSavedAgencies()
      .subscribe(res => {
        this.savedAgencies = res;
      }, error => console.log(error));
  }

}
