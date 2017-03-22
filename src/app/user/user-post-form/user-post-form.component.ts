import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams} from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserFormValidationService } from './user-form-validation.service';
import { LtFeedsService } from '../../feeds/lt-feeds/lt-feeds.service';

@Component({
  selector: 'app-user-post-form',
  templateUrl: './user-post-form.component.html',
  styleUrls: ['./user-post-form.component.css']
})
export class UserPostFormComponent {
  public visible = false;
  images: Array<string> = [];
  userForm: FormGroup;
  selectedImage: string;
  data:any = {};
  public items: Array<string> = ['Movie','Song','Music','Novel','Article','Tv Season','Game','Book','Fitness','Place','Other'];

  constructor(private http: Http, private formBuilder: FormBuilder, private _ltFeedsService: LtFeedsService) {
    this.userForm = this.formBuilder.group({
      'category': ['', [Validators.required, UserFormValidationService.categoryValidator]],
      'name': ['', [Validators.required]],
      'review': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      'rate': [0, [Validators.required, UserFormValidationService.rateValidator]],
      'imageUrl': ['', [Validators.required, UserFormValidationService.imageValidator]],
      'userID':['1', [Validators.required]]
    });
  }

  public show(): void {
    if (this.visible == false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
  
  onchange(imageFlag) {
    if (imageFlag == false) {
      this.images.push(this.userForm.value.imageUrl);
      this.visible = false;
      console.log("image Array:" + this.images);
    }
  }

  submit() {
    console.log(this.userForm.value);
    if (this.userForm.value.category != "" && this.userForm.value.imageUrl != "") {
      var data:any = JSON.stringify(this.userForm.value);
      let headers = new Headers();
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append("userID","1");
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers, search: urlSearchParams });
      this.http
        .post('http://localhost:3000/addFeed', data, options)
        .toPromise()
        .then(res => {
          if(res.status == 201) {
            console.log("user post successfully added");
          }
         })
        .catch(this.handleError);
      // console.log(this.data);
    }
  }

  reset() {
    console.log("inside reset");
    this.images.length = 0;
  }

  consoleText(object) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
