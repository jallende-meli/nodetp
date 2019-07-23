import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Site} from '../clases/site/site';
import {HttpClient} from '@angular/common/http';
import {PaymentMethod} from '../clases/payment/payment-method';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SITE_URL = 'http://localhost:3000/sites';
  constructor(private http: HttpClient) { }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.SITE_URL);
  }
  getPaymentMethod(site: string): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.SITE_URL + '/' + site + '/payment_methods');
  }
}
