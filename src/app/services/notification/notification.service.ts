import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class NotificationService {

  constructor(private snackBar: MdSnackBar) { }
  
  showSuccessNotification() {

  }

  showErrorNotification(message) {
    let config = new MdSnackBarConfig();
    config.duration = 2000;
    config.extraClasses = ['success-snackbar'];
    this.snackBar.open(message,'', config);
  }

  showWarningNotification() {
    
  }


}
