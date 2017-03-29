import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';

import { LtFeedsComponent } from './../feeds/lt-feeds/lt-feeds.component';
import { UserProfileComponent } from './../user/user-profile/user-profile.component';
import { UserPostFormComponent } from './../user/user-post-form/user-post-form.component';
import { UserFeedsComponent } from '../user/user-feeds/user-feeds.component';
import { LtFeedsService } from '../feeds/lt-feeds/lt-feeds.service';
import { LtFeedsHttpService } from '../feeds/lt-feeds/lt-feeds-http.service';
import { UserLoginComponent } from '../login/user-login/user-login.component';
import { HomeComponent } from '../home/home.component';
import { RatingComponent } from '../app-component/rating/rating.component';
import { UserRatingComponent } from '../user/user-rating/user-rating.component';
import { UserPostCategoryComponent } from '../user/user-post-category/user-post-category.component';
import { UserPostImageComponent } from '../user/user-post-image/user-post-image.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'feeds',
        pathMatch: 'full'
      },
      {
        path: 'feeds',
        component: LtFeedsComponent,
        pathMatch: 'full'
      },
      {
        path: 'userProfile',
        component: UserProfileComponent,
        pathMatch: 'full'
      },
      {
        path: 'userPost',
        component: UserPostFormComponent,
      }
    ],
    canActivate: []
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SelectModule
  ],
  declarations: [
    LtFeedsComponent,
    UserProfileComponent,
    UserFeedsComponent,
    RatingComponent,
    UserRatingComponent,
    UserPostFormComponent,
    UserPostImageComponent,
    UserPostCategoryComponent
  ],
  providers: [
    LtFeedsService,
    LtFeedsHttpService
  ],
  exports: [
    RouterModule,
    RatingComponent,
    UserRatingComponent,
    UserPostFormComponent,
    UserPostImageComponent
  ]
})
export class AppRoutingModule { }
