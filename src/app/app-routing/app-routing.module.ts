import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '@angular/material';
import { MdAutocompleteModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';

import { LtFeedsComponent } from './../feeds/lt-feeds/lt-feeds.component';
import { LtFeedsService } from '../feeds/lt-feeds/lt-feeds.service';
import { LtFeedsHttpService } from '../feeds/lt-feeds/lt-feeds-http.service';

import { UserProfileComponent } from './../user/user-profile/user-profile.component';
import { UserProfileTimelineComponent } from './../user/user-profile/user-profile-timeline/user-profile-timeline.component';
import { UserProfileInfoComponent } from './../user/user-profile/user-profile-info/user-profile-info.component';
import { UserProfileFriendsComponent } from './../user/user-profile/user-profile-friends/user-profile-friends.component';
import { UserProfilePhotosComponent } from './../user/user-profile/user-profile-photos/user-profile-photos.component';

import { UserFeedsComponent } from '../feeds/user-feeds/user-feeds.component';
import { UserFeedHttpService } from './../user/user-profile/user-feed-http.service';
import { UserPostFormComponent } from './../user/user-post-form/user-post-form.component';
import { UserLoginComponent } from '../login/user-login/user-login.component';
import { LogoutComponent } from '../login/logout/logout.component';
import { HomeComponent } from '../home/home.component';
import { RatingComponent } from '../lt-components/rating/rating.component';
import { UserRatingComponent } from '../user/user-rating/user-rating.component';
import { UserPostCategoryComponent } from '../user/user-post-category/user-post-category.component';
import { UserPostImageComponent } from '../user/user-post-image/user-post-image.component';
import { FeedsReviewTextPipe } from '../lt-components/pipes/feeds-review-text.pipe';
import { StrToArrPipe } from '../lt-components/pipes/str-to-arr.pipe';
import { ParkingComponent } from '../lt-components/parking/parking.component';

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
        children: [
          {
            path: '',
            redirectTo: 'timline',
            pathMatch: 'full'
          },
          {
            path: 'timline',
            component: UserProfileTimelineComponent,
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: UserProfileInfoComponent  
          },
          {
            path: 'friends',
            component: UserProfileFriendsComponent  
          },
          {
            path: 'photos',
            component: UserProfilePhotosComponent  
          }
        ]
      },
      {
        path: 'parking',
        component: ParkingComponent,
        pathMatch: 'full'
      },
      {
        path: 'logout',
        component: LogoutComponent
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
    SelectModule,
    MaterialModule,
    MdAutocompleteModule,
    MdInputModule,
    MdMenuModule
  ],
  declarations: [
    LtFeedsComponent,
    UserProfileComponent,
    UserProfileTimelineComponent,
    UserProfileInfoComponent,
    UserProfileFriendsComponent,
    UserProfilePhotosComponent,
    UserFeedsComponent,
    RatingComponent,
    UserRatingComponent,
    UserPostFormComponent,
    UserPostImageComponent,
    UserPostCategoryComponent,
    FeedsReviewTextPipe,
    StrToArrPipe,
    ParkingComponent
  ],
  providers: [
    LtFeedsService,
    LtFeedsHttpService,
    UserFeedHttpService
  ],
  exports: [
    RouterModule,
    MaterialModule,
    MdAutocompleteModule,
    MdInputModule,
    MdMenuModule,
    LtFeedsComponent,
    UserProfileComponent,
    UserProfileTimelineComponent,
    UserProfileInfoComponent,
    UserProfileFriendsComponent,
    UserProfilePhotosComponent,
    UserFeedsComponent,
    RatingComponent,
    UserRatingComponent,
    UserPostFormComponent,
    UserPostImageComponent,
    FeedsReviewTextPipe,
    StrToArrPipe,
    ParkingComponent
  ]
})
export class AppRoutingModule { }
