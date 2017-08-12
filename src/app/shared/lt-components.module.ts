/* leisure time components, directives and services for shared use */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './components/alert/alert.component';
import { ParkingComponent } from './components/parking/parking.component';
import { RatingComponent } from './components/rating/rating.component';

import { InputTrimDirective } from './directives/trim.directive';

import { StrToArrPipe } from './pipes/str-to-arr.pipe';

const LT_COMPONENTS = [
  AlertComponent,
  ParkingComponent,
  RatingComponent,
  InputTrimDirective,
  StrToArrPipe,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: LT_COMPONENTS,
  exports: LT_COMPONENTS
})
export class LtComponentsModule { }
