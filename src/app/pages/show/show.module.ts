import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowRoutingModule } from './show-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShowBuyComponent } from './show-buy/show-buy.component';


@NgModule({
  declarations: [
    ShowListComponent,
    ShowBuyComponent
  ],
  imports: [
    CommonModule,
    ShowRoutingModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class ShowModule { }
