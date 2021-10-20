import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomersComponent } from './customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'all', component: ListCustomersComponent },
  { path: 'add', component: AddCustomersComponent },
  { path: 'edit/:id', component: EditCustomersComponent },
  { path: 'delete/:id', component: DeleteCustomersComponent },
  { path: 'search', component: SearchCustomersComponent },
  { path: 'view/:id', component: ViewCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
