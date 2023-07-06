import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestprodComponent } from './gestprod/gestprod.component';
const routes: Routes = [{path : 'admin',component: AdminComponent,children:[
  {path : 'gestprod',component: GestprodComponent }] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
