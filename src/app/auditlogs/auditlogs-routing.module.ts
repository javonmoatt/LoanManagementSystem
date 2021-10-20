import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditlogsComponent } from './auditlogs.component';

const routes: Routes = [{ path: '', component: AuditlogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditlogsRoutingModule { }
