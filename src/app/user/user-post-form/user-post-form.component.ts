import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserFormValidationService } from './user-form-validation.service';
import { LtFeedsService } from '../../feeds/lt-feeds/lt-feeds.service';
import { AppUserService } from '../../services/app-user/app-user.service';
import { ImageService } from '../image-search/image.service';


@Component({
  selector: 'app-user-post-form',
  templateUrl: './user-post-form.component.html',
  styleUrls: ['./user-post-form.component.css']
})
export class UserPostFormComponent {
  userForm: FormGroup;
  hashtagArray: Array<String> = [];

  constructor(private http: Http, 
    private formBuilder: FormBuilder,
    private _ltFeedsService: LtFeedsService,
    private _appUserService:AppUserService,
    private _imageService:ImageService
  ) {
    this.userForm = this.formBuilder.group({
      'category': ['', [Validators.required, UserFormValidationService.categoryValidator]],
      'name': ['', [Validators.required]],
      'review': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      'hashtag': [this.hashtagArray, [Validators.required]],
      'rate': [0, [Validators.required, UserFormValidationService.rateValidator]],
      'imageUrl': ['', [Validators.required, UserFormValidationService.imageValidator]]
    });
    this.userForm.valueChanges.subscribe(data => {
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

  submit() {
    if (this.userForm.value.category != "" && this.userForm.value.imageUrl.length != 0 && this.userForm.value.imageUrl !=0) {
      var data:any = JSON.stringify(this.userForm.value);
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
            this.userForm.reset();
          }
         })
        .catch(this.handleError);
    }
  }

  reset() {;
    this.userForm.reset();
    this._imageService.removeAllImages();
  }

  consoleText(object) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
