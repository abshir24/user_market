import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { RegComponent } from 'app/reg/reg.component';
import { ListingsComponent } from 'app/listings/listings.component';
import { UpdateComponent } from 'app/update/update.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: RegComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'listings',component:ListingsComponent},
  {path:'update/:id',component:UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
