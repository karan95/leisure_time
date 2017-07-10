import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { ParkingComponent } from './parking/parking.component';
import { RatingComponent } from '../lt-components/rating/rating.component';

const LT_COMPONENTS = [
  AlertComponent,
  ParkingComponent,
  RatingComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: LT_COMPONENTS,
  exports: LT_COMPONENTS
})
export class LtComponentsModule { }
