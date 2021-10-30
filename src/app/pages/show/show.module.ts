import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { ShowBuyComponent } from './show-buy/show-buy.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowRoutingModule } from './show-routing.module';

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
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgxMaskModule.forRoot()
  ]
})
export class ShowModule { }
