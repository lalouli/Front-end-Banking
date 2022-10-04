import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CusromerAccountsComponent } from './cusromer-accounts/cusromer-accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  { path : "customers", component : CustomersComponent},
  { path : "accounts", component : AccountsComponent},
  { path : "new-customer", component : NewCustomerComponent},
  { path : "customer-accounts/:id", component : CusromerAccountsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
