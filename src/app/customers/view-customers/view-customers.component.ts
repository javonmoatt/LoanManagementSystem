import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  customerResult: any;
  customerList: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    // this.getCustomer();
  }

  // getCustomer(){
  //   this.customerService.viewCustomers().subscribe((data: any[]) => {
  //     this.customerResult = data;
  //     this.customerList = this.customerResult.results;
  //   });
  // }

}
