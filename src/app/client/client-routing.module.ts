import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GestprodComponent } from '../admin/gestprod/gestprod.component';
const routes: Routes = [
  {path : '', component : ClientComponent ,children:[
    {path : 'home', component: HomeComponent},
    {path : 'about', component: AboutComponent},
    {path : 'admin/gestprod', component: GestprodComponent}
  ] }
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }