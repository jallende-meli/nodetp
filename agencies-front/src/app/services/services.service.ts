import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Site} from '../clases/site/site';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {PaymentMethod} from '../clases/payment/payment-method';
import {Agency} from '../clases/agency/agency';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SITE_URL = 'http://localhost:3000/sites';
  AGENCY_URL = 'http://localhost:3000/agencies';

  constructor(private http: HttpClient) { }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.SITE_URL);
  }
  getPaymentMethod(site: string): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.SITE_URL + '/' + site + '/payment_methods');
  }
  getAgencies(site: string, method: string, latitud: string, longitud: string, radius: string) {
    let params = new HttpParams();
    params = params.append('latitud', latitud);
    params = params.append('longitud', longitud);
    params = params.append('radius', radius);

    return this.http.get<Agency[]>(this.SITE_URL + '/' + site + '/payment_methods/' + method, {params});
  }
  getSavedAgencies() {
    return this.http.get<Agency[]>(this.AGENCY_URL + '/saved_agencies');
  }

  saveAgencies(agencies: Agency[]) {
    const obj = {'agencies': agencies};
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    const options = {
      headers: httpHeaders
    };
    this.http.post(this.AGENCY_URL + '/saved_agencies', obj, options)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
  }
}
