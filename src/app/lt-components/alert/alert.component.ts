import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger(
      'alertState', [
        transition(':enter', [
          style({opacity:0}),
          animate(500, style({opacity:1}))
        ]),
        transition(':leave', [
          animate(500, style({opacity:0}))
        ])
      ]
    )
  ]
})
export class AlertComponent implements OnInit {
  message: any;
  alertPopupState:boolean = false;

  constructor(private alertService: AlertService) { }
  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
      // this.alertPopupState = true;
    });
  }

}
