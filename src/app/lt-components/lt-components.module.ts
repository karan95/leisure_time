import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { FeedsLoadingComponent } from './feeds-loading/feeds-loading.component';
import { ParkingComponent } from './parking/parking.component';
import { RatingComponent } from '../lt-components/rating/rating.component';

const LT_COMPONENTS = [
  AlertComponent,
  FeedsLoadingComponent,
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
