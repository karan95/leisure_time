import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LtFeedsComponent } from './../feeds/lt-feeds/lt-feeds.component';
import { UserProfileComponent } from './../user/user-profile/user-profile.component';
import { UserPostFormComponent } from './../user/user-post-form/user-post-form.component';
import { UserFeedsComponent } from '../user/user-feeds/user-feeds.component';
import { LikeComponent } from '../app-component/like/like.component';
import { CommentComponent } from '../app-component/comment/comment.component'
import { ShareComponent } from '../app-component/share/share.component';
import { RecommendComponent } from '../app-component/recommend/recommend.component';
import { LtFeedsService } from '../feeds/lt-feeds/lt-feeds.service';
import { LtFeedsHttpService } from '../feeds/lt-feeds/lt-feeds-http.service';
import { UserLoginComponent } from '../login/user-login/user-login.component';
import { UserRegisterComponent } from '../login/user-register/user-register.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LtFeedsComponent,
        outlet: 'homeContent'
      },
      {
        path: 'feeds',
        component: LtFeedsComponent,
        outlet: 'homeContent'
      },
      {
        path: 'user',
        component: UserProfileComponent,
        outlet: 'homeContent'
      },
      {
        path: 'userPost',
        component: UserPostFormComponent,
        outlet: 'homeContent'
      }
    ],
    canActivate: []
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  // { path: 'feeds', component: LtFeedsComponent },
  // { path: 'user', component: UserProfileComponent },
  // { path: 'userPost', component: UserPostFormComponent },
  {
    path: '**',
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
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LtFeedsComponent,
    UserProfileComponent,
    UserFeedsComponent,
    LikeComponent,
    CommentComponent,
    ShareComponent,
    RecommendComponent
  ],
  providers: [
    LtFeedsService,
    LtFeedsHttpService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
