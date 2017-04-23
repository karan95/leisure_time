import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';

const LT_COMPONENTS = [
  AlertComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: LT_COMPONENTS,
  exports: LT_COMPONENTS
})
export class LtComponentsModule { }
