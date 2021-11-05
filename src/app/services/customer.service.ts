import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';
import { ICustomer } from '../interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private HttpClient: HttpClient) { }

  getCustomers(): Observable<ICustomer[]>{
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_CUSTOMER_DETAILS;
    return this.HttpClient.get<ICustomer[]>(url);
  }

  viewCustomers(id: any){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMER;
    return this.HttpClient.get<ICustomer[]>(url);
  }

  // deleteCustomers(id){

  // }

  // addCustomers(CustomerObject){

  // }

  // editCustomers(id, customerObject){

  // }

  // searchCustomer(searchTerm){

  // }
}
