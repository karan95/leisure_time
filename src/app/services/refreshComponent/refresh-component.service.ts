import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class RefreshComponentService {

  constructor(private router:Router) { }

  reloadComponent(url) {
     this.router.navigateByUrl('home/parking', { skipLocationChange: true });
     setTimeout(()=>this.router.navigate([url]));
  }
    
}
