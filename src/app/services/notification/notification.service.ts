import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class NotificationService {
  public config:MdSnackBarConfig;
  constructor(private snackBar: MdSnackBar) {
    this.config = new MdSnackBarConfig();
  }
  
  showSuccessNotification(message) {
    this.config.duration = 2000;
    this.config.extraClasses = ['success-snackbar'];
    this.snackBar.open(message,'', this.config);
  }

  showErrorNotification(message) {
    this.config.duration = 2000;
    this.config.extraClasses = ['error-snackbar'];
    this.snackBar.open(message,'', this.config);
  }

  showWarningNotification(message) {
    this.config.duration = 2000;
    this.config.extraClasses = ['warning-snackbar'];
    this.snackBar.open(message,'', this.config);
  }
  
}
