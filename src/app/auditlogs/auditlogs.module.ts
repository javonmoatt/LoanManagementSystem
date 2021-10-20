import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditlogsRoutingModule } from './auditlogs-routing.module';
import { AuditlogsComponent } from './auditlogs.component';


@NgModule({
  declarations: [
    AuditlogsComponent
  ],
  imports: [
    CommonModule,
    AuditlogsRoutingModule
  ]
})
export class AuditlogsModule { }
