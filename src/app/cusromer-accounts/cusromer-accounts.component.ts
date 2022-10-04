import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/model/customer.model';

@Component({
  selector: 'app-cusromer-accounts',
  templateUrl: './cusromer-accounts.component.html',
  styleUrls: ['./cusromer-accounts.component.css']
})
export class CusromerAccountsComponent implements OnInit {
  customerId! : string ;
  customer! : Customer;
  constructor(private route : ActivatedRoute, private router :Router) { 
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
  }

}
