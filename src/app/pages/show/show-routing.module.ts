import { ShowListComponent } from './show-list/show-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBuyComponent } from './show-buy/show-buy.component';

const routes: Routes = [
  { path: '', component: ShowListComponent },
  { path: ':id', component: ShowBuyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
