import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { ViewLoansComponent } from './view-loans/view-loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { EditLoansComponent } from './edit-loans/edit-loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { DeleteLoansComponent } from './delete-loans/delete-loans.component';


@NgModule({
  declarations: [
    LoansComponent,
    ViewLoansComponent,
    AddLoansComponent,
    EditLoansComponent,
    ListLoansComponent,
    DeleteLoansComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
