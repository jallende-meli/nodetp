import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/services.service';
import {Site} from '../clases/site/site';
import {PaymentMethod} from '../clases/payment/payment-method';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sites: Site[];
  paymentMethods: PaymentMethod[];

  selectedSite = 'MLA';
  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit() {
    this.apiService.getSites()
      .subscribe(res => {
        this.sites = res;
      }, error => console.log(error));
    this.getMethodBySite();
  }
  getMethodBySite() {
    this.apiService.getPaymentMethod(this.selectedSite)
      .subscribe(res => {
        console.log(res);
        this.paymentMethods = res;
      }, error => console.log(error));
  }

  onSiteSelected(event) {
    this.selectedSite = event.value;
    this.getMethodBySite();
  }

  onMethodSelect(event) {
    localStorage.setItem('site', this.selectedSite);
    localStorage.setItem('method', event.id);
    this.router.navigate(['/agencies/']);
  }
}
