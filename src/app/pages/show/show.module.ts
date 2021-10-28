import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowListComponent } from './show-list/show-list.component';


@NgModule({
  declarations: [
    ShowListComponent
  ],
  imports: [
    CommonModule,
    ShowRoutingModule
  ]
})
export class ShowModule { }
