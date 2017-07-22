import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserFormValidationService } from './user-form-validation.service';
import { LtFeedsService } from '../../feeds/lt-feeds/lt-feeds.service';
import { AppUserService } from '../../services/app-user/app-user.service';
import { ImageService } from '../image-search/image.service';
import { NotificationService } from '../../services/notification/notification.service';
import { RefreshComponentService } from '../../services/refreshComponent/refresh-component.service';

@Component({
  selector: 'app-user-post-form',
  templateUrl: './user-post-form.component.html',
  styleUrls: ['./user-post-form.component.css']
})
export class UserPostFormComponent {
  userPostForm: FormGroup;
  hashtagArray: Array<String> = [];
  categoryCtrl: FormControl;
  filteredCategories: any;
  categories: Array<string> = ['Movie','Song','Music','Novel','Article','Tv Season','Game','Book','Fitness','Place','Other'];

  constructor(
    private router: Router,
    private http: Http, 
    private formBuilder: FormBuilder,
    private _ltFeedsService: LtFeedsService,
    private _appUserService:AppUserService,
    private _imageService:ImageService,
    private _notificationService:NotificationService,
    private _refreshComponentService:RefreshComponentService
  ) {
    this.categoryCtrl = new FormControl();
    this.filteredCategories = this.categoryCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));

    this.userPostForm = this.formBuilder.group({
      'category': ['', []],
      'name': ['', [Validators.required]],
      'review': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      'hashtag': [this.hashtagArray, [Validators.required]],
      'rate': [0, [Validators.required, UserFormValidationService.rateValidator]],
      'imageUrl': ['', [Validators.required, UserFormValidationService.imageValidator]]
    });

    this.userPostForm.valueChanges.subscribe(data => {
      if(data.hashtag != null && data.hashtag != "") {
        let hashtagString : string = data.hashtag.trim();
        hashtagString = hashtagString.replace(/\s+/g, ' ');
        this.hashtagArray = hashtagString.split(' ');
        for (let i = 0; i < this.hashtagArray.length; i++) {
          this.hashtagArray[i] = "#"+this.hashtagArray[i];
        }
      } else {
        this.hashtagArray = [];
      }
    })
  }

  filterStates(val: string) {
    this.userPostForm.value.category = val;
    return val ? this.categories.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.categories;
  }

  submit() {
    if (this.userPostForm.value.category != "" && this.userPostForm.value.imageUrl.length != 0 && this.userPostForm.value.imageUrl !=0) {
      var data:any = JSON.stringify(this.userPostForm.value);
      let headers = new Headers();
      let currentUser = this._appUserService.gerUser();
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('uid', currentUser.userId);
      urlSearchParams.append('uname', currentUser.name);
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers, search: urlSearchParams, withCredentials: true });
      this.http
        .post('http://localhost:3000/addFeed', data, options)
        .toPromise()
        .then(res => {
          if(res.status == 201) {
            this._notificationService.showSuccessNotification('You have succesfully added new post.');
            this.userPostForm.reset();
            this._refreshComponentService.reloadComponent(this.router.url);
          }
         })
        .catch(this.handleError);
    } else {
      this._notificationService.showErrorNotification('This post appears to have missing details. Please enter all details.');
    }
  }

  reset() {;
    this.userPostForm.reset();
    this._imageService.removeAllImages();
  }

  consoleText(object) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
